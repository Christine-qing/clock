import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import menuPage from '@/components/menu/menuPage'

import SokobanGame from '@/components/menu/gameDemo/SokobanGame'
import myGame from '@/components/menu/gameDemo/myGame'

import axios from '@/components/menu/vueTest/axios'
import vuetest from '@/components/menu/vueTest/vuetest'
import testVuex_mo from '@/components/menu/vueTest/testVuex_mo'
import testVuex_yin from '@/components/menu/vueTest/testVuex_yin'



import lide from '@/components/menu/ishowMap/lideTest'
import busTrip from '@/components/menu/ishowMap/busTrip'
import mapRadius from '@/components/menu/ishowMap/mapRadius'
import mapFence from '@/components/menu/ishowMap/mapFence'
import anchor from '@/components/menu/ishowMap/anchor'
import point from '@/components/menu/ishowMap/point'
import fenceCenter from '@/components/menu/ishowMap/fenceCenter'

import listPage from '@/components/menu/zhishuDemo/listPage'
import projectReport from '@/components/menu/zhishuDemo/projectReport'
import newProject from '@/components/menu/zhishuDemo/newProject'
import reportForm from '@/components/menu/zhishuDemo/reportForm'

import echartsBar from '@/components/menu/echartsDemo/echartsBar'
import echartsLine from '@/components/menu/echartsDemo/echartsLine'
import echartsBarLine from '@/components/menu/echartsDemo/echartsBarLine'
import echartsPie from '@/components/menu/echartsDemo/echartsPie'

import upload from '@/components/menu/iviewTest/upload'
import menu from '@/components/menu/iviewTest/menu'
import table from '@/components/menu/iviewTest/table'

import mapInit from '@/components/menu/Mapbox/mapInit'
import mapStyle from '@/components/menu/Mapbox/mapStyle'
import map3d from '@/components/menu/Mapbox/map3d'
import animate from '@/components/menu/Mapbox/animate'
import mapButton from '@/components/menu/Mapbox/mapButton'
import getCoordinate from '@/components/menu/Mapbox/getCoordinate'
import heat from '@/components/menu/Mapbox/heat'
import addLine from '@/components/menu/Mapbox/addLine'
import drawnPolygon from '@/components/menu/Mapbox/drawnPolygon'
import addEnclosure from '@/components/menu/Mapbox/addEnclosure'
import addPolygon from '@/components/menu/Mapbox/addPolygon'
import addMarker from '@/components/menu/Mapbox/addMarker'
import addImg from '@/components/menu/Mapbox/addImg'
import customized from '@/components/menu/Mapbox/customized'

import leafletInit from '@/components/menu/Leaflet/leafletInit'
import leafletPoint from '@/components/menu/Leaflet/leafletPoint'
import addIcon from '@/components/menu/Leaflet/addIcon'
import geojson from '@/components/menu/Leaflet/geojson'
import choropleth from '@/components/menu/Leaflet/choropleth'
import leafletStyle from '@/components/menu/Leaflet/leafletStyle'
import mapZoom from '@/components/menu/Leaflet/mapZoom'
import leafletmap from '@/components/menu/Leaflet/leafletmap'
import leafletCircle from '@/components/menu/Leaflet/leafletCircle'

import createRegexp from '@/components/menu/regexp/createRegexp'

import inMap_test from '@/components/menu/inMap/inMap_test'
import inMap_DotOverlay from '@/components/menu/inMap/inMap_DotOverlay'
import inMap_imgOverlay from '@/components/menu/inMap/inMap_imgOverlay'
import inMap_BoundaryOverlay from '@/components/menu/inMap/inMap_BoundaryOverlay'
import inMap_ColorBoundaryOverlay from '@/components/menu/inMap/inMap_ColorBoundaryOverlay'
import inMap_CircuitOverlay from '@/components/menu/inMap/inMap_CircuitOverlay'
import inMap_GriddingOverlay from '@/components/menu/inMap/inMap_GriddingOverlay'
import inMap_HoneycombOverlay from '@/components/menu/inMap/inMap_HoneycombOverlay'
import inMap_HeatOverlay from '@/components/menu/inMap/inMap_HeatOverlay'

import ts_init from '@/components/menu/typeScript/ts_init'



Vue.use(Router)



export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello,

        },
        {
            path: '/menuPage',
            name: 'menuPage',
            component: menuPage,

        },

        {
            path: '/SokobanGame',
            name: 'SokobanGame',
            component: SokobanGame,
        },
        {
            path: '/myGame',
            name: 'myGame',
            component: myGame
        },
        {
            path: '/axios',
            name: 'axios',
            component: axios
        },
        {
            path: '/lideTest',
            name: 'lideTest',
            component: lide
        },
        {
            path: '/busTrip',
            name: 'busTrip',
            component: busTrip
        },
        {
            path: '/mapRadius',
            name: 'mapRadius',
            component: mapRadius
        },
        {
            path: '/mapFence',
            name: 'mapFence',
            component: mapFence
        },
        {
            path: '/anchor',
            name: 'anchor',
            component: anchor
        },
        {
            path: '/listPage',
            name: 'listPage',
            component: listPage
        },
        {
            path: '/projectReport',
            name: 'projectReport',
            component: projectReport
        },
        {
            path: '/newProject',
            name: 'newProject',
            component: newProject
        },
        {
            path: '/echartsBar',
            name: 'echartsBar',
            component: echartsBar
        },
        {
            path: '/echartsLine',
            name: 'echartsLine',
            component: echartsLine
        },
        {
            path: '/echartsBarLine',
            name: 'echartsBarLine',
            component: echartsBarLine
        },
        {
            path: '/echartsPie',
            name: 'echartsPie',
            component: echartsPie
        },
        {
            path: '/upload',
            name: 'upload',
            component: upload
        },
        {
            path: '/point',
            name: 'point',
            component: point
        },
        {
            path: '/reportForm',
            name: 'reportForm',
            component: reportForm
        },
        {
            path: '/fenceCenter',
            name: 'fenceCenter',
            component: fenceCenter
        },
        {
            path: '/vuetest',
            name: 'vuetest',
            component: vuetest
        },
        {
            path: '/menu',
            name: 'menu',
            component: menu
        }, {
            path: '/table',
            name: 'table',
            component: table
        },
        {
            path: '/mapStyle',
            name: 'mapStyle',
            component: mapStyle
        },
        {
            path: '/map3d',
            name: 'map3d',
            component: map3d
        },
        {
            path: '/animate',
            name: 'animate',
            component: animate
        },
        {
            path: '/mapButton',
            name: 'mapButton',
            component: mapButton
        },
        {
            path: '/mapInit',
            name: 'mapInit',
            component: mapInit
        },
        {
            path: '/getCoordinate',
            name: 'getCoordinate',
            component: getCoordinate
        },
        {
            path: '/heat',
            name: 'heat',
            component: heat
        },
        {
            path: '/addLine',
            name: 'addLine',
            component: addLine
        },
        {
            path: '/leafletInit',
            name: 'leafletInit',
            component: leafletInit
        },
        {
            path: '/leafletPoint',
            name: 'leafletPoint',
            component: leafletPoint
        },
        {
            path: '/drawnPolygon',
            name: 'drawnPolygon',
            component: drawnPolygon
        },
        {
            path: '/addIcon',
            name: 'addIcon',
            component: addIcon
        },
        {
            path: '/choropleth',
            name: 'choropleth',
            component: choropleth
        },
        {
            path: '/leafletStyle',
            name: 'leafletStyle',
            component: leafletStyle
        },
        {
            path: '/mapZoom',
            name: 'mapZoom',
            component: mapZoom
        },
        {
            path: '/addEnclosure',
            name: 'addEnclosure',
            component: addEnclosure
        },
        {
            path: '/createRegexp',
            name: 'createRegexp',
            component: createRegexp
        },
        {
            path: '/inMap_test',
            name: 'inMap_test',
            component: inMap_test
        },
        {
            path: '/addPolygon',
            name: 'addPolygon',
            component: addPolygon
        },
        {
            path: '/addMarker',
            name: 'addMarker',
            component: addMarker
        },
        {
            path: '/addImg',
            name: 'addImg',
            component: addImg
        },
        {
            path: '/customized',
            name: 'customized',
            component: customized
        },
        {
            path: '/leafletmap',
            name: 'leafletmap',
            component: leafletmap
        },
        {
            path: '/leafletCircle',
            name: 'leafletCircle',
            component: leafletCircle
        },
        {
            path: '/inMap_DotOverlay',
            name: 'inMap_DotOverlay',
            component: inMap_DotOverlay
        },
        {
            path: '/inMap_imgOverlay',
            name: 'inMap_imgOverlay',
            component: inMap_imgOverlay
        },
        {
            path: '/inMap_BoundaryOverlay',
            name: 'inMap_BoundaryOverlay',
            component: inMap_BoundaryOverlay
        },
        {
            path: '/inMap_ColorBoundaryOverlay',
            name: 'inMap_ColorBoundaryOverlay',
            component: inMap_ColorBoundaryOverlay
        },{
            path: '/inMap_CircuitOverlay',
            name: 'inMap_CircuitOverlay',
            component: inMap_CircuitOverlay
        },
        {
            path: '/inMap_GriddingOverlay',
            name: 'inMap_GriddingOverlay',
            component: inMap_GriddingOverlay
        },
        {
            path: '/inMap_HoneycombOverlay',
            name: 'inMap_HoneycombOverlay',
            component: inMap_HoneycombOverlay
        },
        {
            path: '/inMap_HeatOverlay',
            name: 'inMap_HeatOverlay',
            component: inMap_HeatOverlay
        },
        {
            path: '/testVuex_mo',
            name: 'testVuex_mo',
            component: testVuex_mo
        },
        {
            path: '/testVuex_yin',
            name: 'testVuex_yin',
            component: testVuex_yin
        },
        {
            path: '/ts_init',
            name: 'ts_init',
            component: ts_init
        },



    ]
})