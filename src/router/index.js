import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: (resolve) => require(['@/components/login'], resolve),
        // beforeEnter: (to, from, next) => {
        //     //console.log(`to is ${to},from is ${from}`,to,from)
        //     localStorage.getItem('access_token') ? next() : next({ path: '/Hello' })
        //     next()

        // },
    },
    {
        path: '/user',
        name: 'user',
        component: (resolve) => require(['@/components/menu/user'], resolve),

    },
    {
        path: '*',
        name: '404',
        component: (resolve) => require(['@/components/menu/menuPage'], resolve),

    },
    {
        path: '/hello',
        name: 'hello',
        component: (resolve) => require(['@/components/Hello'], resolve),

    },
    {
        path: '/menuPage',
        name: 'menuPage',
        component: (resolve) => require(['@/components/menu/menuPage'], resolve),

    },

    {
        path: '/SokobanGame',
        name: 'SokobanGame',
        component: (resolve) => require(['@/components/menu/gameDemo/SokobanGame'], resolve),

    },
    {
        path: '/myGame',
        name: 'myGame',
        component: (resolve) => require(['@/components/menu/gameDemo/myGame'], resolve),

    },
    {
        path: '/axios',
        name: 'axios',
        component: (resolve) => require(['@/components/menu/vueTest/axios'], resolve),

    },
    {
        path: '/lideTest',
        name: 'lideTest',
        component: (resolve) => require(['@/components/menu/ishowMap/lideTest'], resolve),

    },
    {
        path: '/busTrip',
        name: 'busTrip',
        component: (resolve) => require(['@/components/menu/ishowMap/busTrip'], resolve),

    },
    {
        path: '/mapRadius',
        name: 'mapRadius',
        component: (resolve) => require(['@/components/menu/ishowMap/mapRadius'], resolve),

    },
    {
        path: '/mapFence',
        name: 'mapFence',
        component: (resolve) => require(['@/components/menu/ishowMap/mapFence'], resolve),

    },
    {
        path: '/anchor',
        name: 'anchor',
        component: (resolve) => require(['@/components/menu/ishowMap/anchor'], resolve),

    },
    {
        path: '/listPage',
        name: 'listPage',
        component: (resolve) => require(['@/components/menu/zhishuDemo/listPage'], resolve),

    },
    {
        path: '/projectReport',
        name: 'projectReport',
        component: (resolve) => require(['@/components/menu/zhishuDemo/projectReport'], resolve),

    },
    {
        path: '/newProject',
        name: 'newProject',
        component: (resolve) => require(['@/components/menu/zhishuDemo/newProject'], resolve),

    },
    {
        path: '/echartsBar',
        name: 'echartsBar',
        component: (resolve) => require(['@/components/menu/echartsDemo/echartsBar'], resolve),

    },
    {
        path: '/echartsLine',
        name: 'echartsLine',
        component: (resolve) => require(['@/components/menu/echartsDemo/echartsLine'], resolve),

    },
    {
        path: '/echartsBarLine',
        name: 'echartsBarLine',
        component: (resolve) => require(['@/components/menu/echartsDemo/echartsBarLine'], resolve),

    },
    {
        path: '/echartsPie',
        name: 'echartsPie',
        component: (resolve) => require(['@/components/menu/echartsDemo/echartsPie'], resolve),

    },
    {
        path: '/echartsMap',
        name: 'echartsMap',
        component: (resolve) => require(['@/components/menu/echartsDemo/echartsMap'], resolve),

    },
    {
        path: '/echartsString',
        name: 'echartsString',
        component: (resolve) => require(['@/components/menu/echartsDemo/echartsString'], resolve),

    },
    {
        path: '/upload',
        name: 'upload',
        component: (resolve) => require(['@/components/menu/iviewTest/upload'], resolve),

    },
    {
        path: '/treeTest',
        name: 'treeTest',
        component: (resolve) => require(['@/components/menu/iviewTest/treeTest'], resolve),

    },
    {
        path: '/point',
        name: 'point',
        component: (resolve) => require(['@/components/menu/ishowMap/point'], resolve),

    },
    {
        path: '/reportForm',
        name: 'reportForm',
        component: (resolve) => require(['@/components/menu/zhishuDemo/reportForm'], resolve),

    },
    {
        path: '/fenceCenter',
        name: 'fenceCenter',
        component: (resolve) => require(['@/components/menu/ishowMap/fenceCenter'], resolve),

    },
    {
        path: '/vuetest',
        name: 'vuetest',
        component: (resolve) => require(['@/components/menu/vueTest/vuetest'], resolve),

    },

    {
        path: '/menu',
        name: 'menu',
        component: (resolve) => require(['@/components/menu/iviewTest/menu'], resolve),

    }, {
        path: '/colorTable',
        name: 'colorTable',
        component: (resolve) => require(['@/components/menu/iviewTest/colorTable'], resolve),

    },
    {
        path: '/userTable',
        name: 'userTable',
        component: (resolve) => require(['@/components/menu/iviewTest/userTable'], resolve),

    },
    {
        path: '/mapStyle',
        name: 'mapStyle',
        component: (resolve) => require(['@/components/menu/Mapbox/mapStyle'], resolve),

    },
    {
        path: '/map3d',
        name: 'map3d',
        component: (resolve) => require(['@/components/menu/Mapbox/map3d'], resolve),

    },
    {
        path: '/animate',
        name: 'animate',
        component: (resolve) => require(['@/components/menu/Mapbox/animate'], resolve),

    },
    {
        path: '/mapButton',
        name: 'mapButton',
        component: (resolve) => require(['@/components/menu/Mapbox/mapButton'], resolve),

    },
    {
        path: '/mapInit',
        name: 'mapInit',
        component: (resolve) => require(['@/components/menu/Mapbox/mapInit'], resolve),

    },
    {
        path: '/getCoordinate',
        name: 'getCoordinate',
        component: (resolve) => require(['@/components/menu/Mapbox/getCoordinate'], resolve),

    },
    {
        path: '/heat',
        name: 'heat',
        component: (resolve) => require(['@/components/menu/Mapbox/heat'], resolve),

    },
    {
        path: '/addLine',
        name: 'addLine',
        component: (resolve) => require(['@/components/menu/Mapbox/addLine'], resolve),

    },
    {
        path: '/leafletInit',
        name: 'leafletInit',
        component: (resolve) => require(['@/components/menu/Leaflet/leafletInit'], resolve),

    },
    {
        path: '/leafletPoint',
        name: 'leafletPoint',
        component: (resolve) => require(['@/components/menu/Leaflet/leafletPoint'], resolve),

    },
    {
        path: '/drawnPolygon',
        name: 'drawnPolygon',
        component: (resolve) => require(['@/components/menu/Mapbox/drawnPolygon'], resolve),

    },
    {
        path: '/addIcon',
        name: 'addIcon',
        component: (resolve) => require(['@/components/menu/Leaflet/addIcon'], resolve),

    },
    {
        path: '/choropleth',
        name: 'choropleth',
        component: (resolve) => require(['@/components/menu/Leaflet/choropleth'], resolve),

    },
    {
        path: '/leafletStyle',
        name: 'leafletStyle',
        component: (resolve) => require(['@/components/menu/Leaflet/leafletStyle'], resolve),

    },
    {
        path: '/mapZoom',
        name: 'mapZoom',
        component: (resolve) => require(['@/components/menu/Leaflet/mapZoom'], resolve),

    },
    {
        path: '/addEnclosure',
        name: 'addEnclosure',
        component: (resolve) => require(['@/components/menu/Mapbox/addEnclosure'], resolve),

    },
    {
        path: '/createRegexp',
        name: 'createRegexp',
        component: (resolve) => require(['@/components/menu/regexp/createRegexp'], resolve),

    },
    {
        path: '/inMap_test',
        name: 'inMap_test',
        component: (resolve) => require(['@/components/menu/inMap/inMap_test'], resolve),

    },
    {
        path: '/addPolygon',
        name: 'addPolygon',
        component: (resolve) => require(['@/components/menu/Mapbox/addPolygon'], resolve),

    },
    {
        path: '/addMarker',
        name: 'addMarker',
        component: (resolve) => require(['@/components/menu/Mapbox/addMarker'], resolve),

    },
    {
        path: '/customized',
        name: 'customized',
        component: (resolve) => require(['@/components/menu/Mapbox/customized'], resolve),

    },
    {
        path: '/leafletmap',
        name: 'leafletmap',
        component: (resolve) => require(['@/components/menu/Leaflet/leafletmap'], resolve),

    },
    {
        path: '/leafletCircle',
        name: 'leafletCircle',
        component: (resolve) => require(['@/components/menu/Leaflet/leafletCircle'], resolve),

    },
    {
        path: '/inMap_DotOverlay',
        name: 'inMap_DotOverlay',
        component: (resolve) => require(['@/components/menu/inMap/inMap_DotOverlay'], resolve),

    },
    {
        path: '/inMap_imgOverlay',
        name: 'inMap_imgOverlay',
        component: (resolve) => require(['@/components/menu/inMap/inMap_imgOverlay'], resolve),

    },
    {
        path: '/inMap_BoundaryOverlay',
        name: 'inMap_BoundaryOverlay',
        component: (resolve) => require(['@/components/menu/inMap/inMap_BoundaryOverlay'], resolve),

    },
    {
        path: '/inMap_ColorBoundaryOverlay',
        name: 'inMap_ColorBoundaryOverlay',
        component: (resolve) => require(['@/components/menu/inMap/inMap_ColorBoundaryOverlay'], resolve),

    }, {
        path: '/inMap_CircuitOverlay',
        name: 'inMap_CircuitOverlay',
        component: (resolve) => require(['@/components/menu/inMap/inMap_CircuitOverlay'], resolve),

    },
    {
        path: '/inMap_GriddingOverlay',
        name: 'inMap_GriddingOverlay',
        component: (resolve) => require(['@/components/menu/inMap/inMap_GriddingOverlay'], resolve),

    },
    {
        path: '/inMap_HoneycombOverlay',
        name: 'inMap_HoneycombOverlay',
        component: (resolve) => require(['@/components/menu/inMap/inMap_HoneycombOverlay'], resolve),

    },
    {
        path: '/inMap_HeatOverlay',
        name: 'inMap_HeatOverlay',
        component: (resolve) => require(['@/components/menu/inMap/inMap_HeatOverlay'], resolve),

    },
    {
        path: '/ts_init',
        name: 'ts_init',
        component: (resolve) => require(['@/components/menu/typeScript/ts_init'], resolve),

    },
    {
        path: '/bmap_init',
        name: 'bmap_init',
        component: (resolve) => require(['@/components/menu/Bmap/bmap_init'], resolve),
    },
    {
        path: '/bmap_Control',
        name: 'bmap_Control',
        component: (resolve) => require(['@/components/menu/Bmap/bmap_Control'], resolve),
    },
    {
        path: '/bmap_overlay',
        name: 'bmap_overlay',
        component: (resolve) => require(['@/components/menu/Bmap/bmap_overlay'], resolve),
    },
    {
        path: '/methods',
        name: 'methods',
        component: (resolve) => require(['@/components/menu/vueTest/methods'], resolve),
    },
    {
        path: '/StoreIndex',
        name: 'StoreIndex',
        component: (resolve) => require(['@/components/menu/storeProject/StoreIndex'], resolve),
    },
    {
        path: '/iviewTable',
        name: 'iviewTable',
        component: (resolve) => require(['@/components/menu/vueTest/iviewTable'], resolve),
    },
    {
        path: '/chartInit',
        name: 'chartInit',
        component: (resolve) => require(['@/components/menu/vueCharts/chartInit'], resolve),
    },
    {
        path: '/chartMap',
        name: 'chartMap',
        component: (resolve) => require(['@/components/menu/vueCharts/chartMap'], resolve),
    },
    {
        path: '/boxDrag',
        name: 'boxDrag',
        component: (resolve) => require(['@/components/menu/vueCharts/boxDrag'], resolve),
    },
    {
        path: '/test2',
        name: 'test2',
        component: (resolve) => require(['@/components/common/test/test2'], resolve),
    },

    ]
})