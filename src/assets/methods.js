// 跟随鼠标的label
var mouseLabel = null;
// 红色marker
var redMarker = null;

var searchPage = {
	page: 1,
	pageSize: 10
}
var currentCity = {
	cityname: "北京市"
}
// 页码
var $simplePage = null;

$(function(){
	var $window = $(window);
	initWrapperHeight();
	// 地图
	mapView = new MapView("LDMapPanel");
	mapView.init();
	
	$window.on("resize", initWrapperHeight);
	// 初始化地图容器高度
	function initWrapperHeight(){
		var $panel = $(".mapwrap");
		var height = $window.height() - $(".tl-header").outerHeight(true);
		$panel.height(height);
	}
	
	// 监听输入、搜索
	var $input = $(".search-input");
	var $searchBtn = $("#search-btn");
	$input.keyup(function(evt){
		if(evt.keyCode == 13){
			$searchBtn.click();
		}
	})
	
	$searchBtn.click(function(){
		searchPage.page = 1;
		if($simplePage){
			$simplePage.destory();
			$simplePage = null;
		}
		sendWordSearch();
	});
	
	// 复制
	var $copyBtn = $("#copy-btn");
	var $copyInput = $(".copy-content");
	
	$copyBtn.zclip({
		path: "/js/zclip/ZeroClipboard.swf",
		copy: function(){
			return $copyInput.val();
		},
		afterCopy: function(){
			conisole.log(arguments);
		}
	});
	
	// 鼠标事件
	mapView.addEventListener("MOUSE_MOVE", function(evt){
		var lnglat = evt.lnglat;
		
		var labelContent = '<div style="background-color: #FFF; border: 1px #000 solid; padding: 0px 5px;">' + lnglat.toString() + '</div>';
		if(mouseLabel){
			mouseLabel.setPosition(lnglat);
			mouseLabel.setContent(labelContent);
		}else {
			mouseLabel =mapView.addLabel(labelContent, lnglat.lng, lnglat.lat);
		}
	});
	
	mapView.addEventListener("CLICK", function(evt){
		debugger
		var lnglat = evt.lnglat;
		$copyInput.val(lnglat.toString());
	});
	
	var $zoomNum = $(".zoom-info .zoom-num");
	$zoomNum.text(mapView.getZoom());
	mapView.addEventListener("ZOOM_END", function(evt){
		$zoomNum.text(evt.zoom);
	});
	
	mapView.addEventListener("MOVE_END", function(evt){
		var lnglat = evt.center;
		$.when($.ajax({
			url: MAP_CONFIG.SERV.SERV_RGEO_URL + "location=" + lnglat.toString(),
			type: "GET",
			dataType: "jsonp"
		})).done(function(data){
			if(data && data.result.length > 0){
				var city = data.result[0];
				var info = city.addressComponent;
				// 无数据
				if(!isNotNull(info.adCode)){
					return ;
				}
				currentCity.cityname = info.city || info.province;
				$("#currentCity").text(currentCity.cityname);
			}
		});
	});
});

/**
 * 搜索
 */
function sendWordSearch(){
	var $input = $(".search-input");
	var word = $input.val();
	if(!isNotNull(word)){
		return ;
	}
	word = $.trim(word);
	$input.val(word);
	
	var $regoBtn = $(".search .checkbox-item");
	var regoMode = $regoBtn.is(":checked");
	
	var searchUrl = MAP_CONFIG.SERV.SERV_POI_URL+"query=" + word + "&region=" + currentCity.cityname 
			+"&page_size="+searchPage.pageSize+"&page_num="+searchPage.page;
	// 逆地理编码
	if(regoMode){
		var searchUrl = MAP_CONFIG.SERV.SERV_RGEO_URL+"location=" + word;
	}
	
	clearOverlayers();
	
	$.ajax({
		async : true,
		type : "GET",
		dataType :"jsonp",
		url: searchUrl,
		success: function(data){
			if(!data || data.status != "0"){
				$(".mapwrap .map-info .rs_noresult").show().siblings().hide();
				return ;
			}
			$(".tool-info").hide();
			$(".rs_result").show();
			data = convertSearchData2datasource(data, regoMode);
			showSearchList(data);
			//页码
			if(!$simplePage){
				$simplePage = $(".rs_result .rs_pagelist").simplePage({
					total: parseInt(data.total),
					pageSize: searchPage.pageSize,
					callback: function(num){
						if(searchPage.page == num){
							return ;
						}
						searchPage.page = num;
						sendWordSearch();
					}
				});
			}
		}
	});
}

/**
 * 展示数据
 * @param {Object} data
 */
function showSearchList(data){
	var $showPanel = $(".mapwrap .map-info .rs_pois_content");
	$showPanel.empty();
	
	var records = data.pois;
	
	if(records.length <= 0){
		$(".mapwrap .map-info .rs_noresult").show().siblings().hide();
		return ;
	}
	
	var mLocations = [];
	
	for (var i =0;i<records.length ;i++) {
		var record=records[i];
		record.datasource = record.datasource.toLowerCase();
		var address=record.address?record.address:currentCity.cityname;
		if(record.datasource==="bus"){
			address = [];
			// 过滤重复
			var map = {};
			for(var x in record.line_info){
				var info = record.line_info[x];
				var rst = stnameReg.exec(info.line_name);
				map[rst[1]] = true;
			}
			
			for(var key in map){
				var value = map[key];
				if(value){
					address.push(key);
				}
			}
			// 间隔更大
			//address = address.join("，");
		}
		record.address=address;
		var imgReal_n="";
		var marker=addIconMarker(record,i);//将列表中的全景标注出来	
		marker.datasource=record.datasource;
		var makerPosition = marker.getPosition();
		mLocations.push(makerPosition)
		if(!(typeof address === "string") && address.slice){
			address = "<span>" + address.join("</span>，<span>") + "</span>";
		}
		
		var mapping = {
			"\"": "&quot;",
			"\'": "&apos;"
		};
		
		record.name = record.name.replace(/("|')/g, function(rs){
			var mt = rs[0];
			return mapping[mt] || rs[0];
		});
		
		var listitem='<li marker-id="'+marker.getId()+'">'
			+ '<p class="number bubble'+i+'">'+(i+1)+'</p>'
				+ '<div class="adress">'
					+ '<p class="address_name">'+record.name+'</p>'
					+ '<p class="address_info">'+address+'</p>'
				+ '</div>'
			+'</li>';//<font><img src="images/img_1.gif" class="person" /></font>
		$showPanel.append(listitem);//加入一个结果
	}
	
	mapView.setBestMap(mLocations);
	
	$showPanel.find("li").hover(function(){
//		$(this).addClass("hover");
		if(!$(this).hasClass("active")){
			//如果不是active的-即被点击的，鼠标移上去就要变红
			var mid=$(this).attr("marker-id");
			var marker=mapView.getOverlayById(mid);
			var icon=marker.getIcon();//当前marker
			var offset=new LD.Pixel(icon.getOffset().x,icon.getOffset().y-31);//变成红色
			marker.setIcon(new LD.Icon(icon.getSrc(), icon.getSize(), offset ));
			marker.setZIndex(10);
		}
	},function(){
//		$(this).removeClass("hover");
		if(!$(this).hasClass("active")){
			//如果不是active的-即被点击的，鼠标移出就要变回蓝
			var mid=$(this).attr("marker-id");
			var marker=mapView.getOverlayById(mid);
			var icon=marker.getIcon();
			var offset=new LD.Pixel(icon.getOffset().x,icon.getOffset().y+31);//恢复蓝色
			marker.setIcon(new LD.Icon(icon.getSrc(), icon.getSize(), offset ));
			marker.setZIndex(1);
		}
		
	}).click(function(){
		var mid=$(this).attr("marker-id");
		openSearchWindow(mapView.getOverlayById(mid));
	});
	
}

function addIconMarker(record, index) {
	record.canOpen = record.canOpen == null ? true : record.canOpen;
	var i = index ? index : 0;
	var opts = $.extend({}, MAP_STYLE.icon.bubble, {
		editable : false,
		offsetX : index*-53-1,
		offsetY : -0,
		lon : record.location.lng,//(record.posX * 0.00001).toFixed(5),
		lat :record.location.lat,// (record.posY * 0.00001).toFixed(5),
		name : record.name,
		phone : record.telephone || "",
		addr : record.address || "",
		click : record.canOpen ? openSearchWindow : null
	});
	
	var iconMarker = mapView.addIconMarker(opts);
	return iconMarker;
}


/**
 * 将搜索结果按照datasource分类
 * @param data
 * @param isRego 是否为逆地理编码结果，默认false
 * @returns {Object}
 */
function convertSearchData2datasource(data, isRego){
	isRego = !(!isRego);
	var result = {
			total : 0,
			status : null,
			message : null,
			districts : [],
			buslines : [],
			pois : []
	};
	if(!data){
		return result;
	}
	result.total = data.total;
	result.status = data.status;
	result.message = data.message;
	
	if(!isRego){
		for(var i in data.results){
			var item = data.results[i];
			var datasource = item.datasource.toLowerCase();
			if(datasource==="district"){
				result.districts.push(item);
			}else if (datasource==="busline") {
				result.buslines.push(item);
			}else if (datasource==="bus" || datasource==="poi"){
				result.pois.push(item);
			}
		}
	}else {
		for(var i in data.result){
			var regoItem = data.result[i];
			var component = regoItem.addressComponent;
			var item = $.extend({}, {
				location: regoItem.location,
				name: regoItem.formatted_address,
				address: component.province || component.district,
				datasource: "poi"
			});
			result.pois.push(item);
		}
	}
	
	return result;
}


//=======================地图相关开始========================
function addBubbleMarker(record, index) {
	record.canOpen = record.canOpen == null ? true : record.canOpen;
	index = index == null ? 0 : index;
	var opts = $.extend({}, MAP_STYLE.icon.bubble, {
		editable : false,
		offsetX : index*-53-1,
		offsetY : -0,
		lon : record.location.lng,//(record.posX * 0.00001).toFixed(5),
		lat :record.location.lat,// (record.posY * 0.00001).toFixed(5),
		name : record.name,
		phone : record.telephone || "",
		addr : record.address || "",
		click : record.canOpen ? openSearchWindow : null
	});
	
	var iconMarker = mapView.addMarker(opts);
	return iconMarker;
}

function openSearchWindow(e){
	var marker = e instanceof LD.Marker ? e : e.target;
	
	var $copyInput = $(".copy-content");
	$copyInput.val(marker.getPosition().toString());
	
	var html = '<div id="infowindow-content">'
			+ '<div class="title" title="' + marker.name + '">' + marker.name + '</div>'
			+ '<div class="content">'
				+ '<div class="address">地址：' + marker.addr + '</div>'
				+ '<div class="lonlat">坐标：' + marker.getPosition().toString() + '</div>'
			+ '</div>'
		+ '</div>';
	marker.openInfoWindow(html, {
		position: marker.getPosition(),
		offset: new LD.Pixel(0, -21),
		autoPan: true,
		size: new LD.Size(280, 120)
	});
	
	//左侧列表中对应记录处于选中状态
	var $li=$(".map-info .rs_pois_content").find("li[marker-id='"+marker.getId()+"']");
	//滚动到列表的当前项
	var diff=$li.offset().top-$(".map-info .rs_pois_content").offset().top;
	$(".map-info").animate({scrollTop:diff},200);
	//MARKER图标变红
	changeMarkerStatus(marker.getId(),$li[0]);
}

function changeMarkerStatus(mid,obj){
	var $panel = $(".map-info");
	$panel.find(".rs_pois_content li").removeClass("active");//清除原有的红色
	$(obj).addClass("active").siblings().removeClass("active");//左侧列表中对应记录处于选中状态
	$panel.find(".rs_pois_content li").each(function(index,item){
		var _id=$(item).attr("marker-id");
		var marker=mapView.getOverlayById(_id);
		if(_id!=mid){
			var icon=marker.getIcon();
			if(icon.getOffset().y<-5){
				var offset=new LD.Pixel(icon.getOffset().x,icon.getOffset().y+31);//恢复蓝色
				marker.setIcon(new LD.Icon(icon.getSrc(), icon.getSize(), offset ));
				marker.setZIndex(1);
			}
		}else{
			var icon=marker.getIcon();//当前marker
			if(icon.getOffset().y>-1){
				var offset=new LD.Pixel(icon.getOffset().x,icon.getOffset().y-31);//变成红色
				marker.setIcon(new LD.Icon(icon.getSrc(), icon.getSize(), offset ));
				marker.setZIndex(10);
			}
		}
	});
}
function clearOverlayers(){
	mapView.clearOverlays();
	mouseLabel = null;
}
//=======================地图相关结束========================
