var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Sektor_2 = new ol.format.GeoJSON();
var features_Batas_Sektor_2 = format_Batas_Sektor_2.readFeatures(json_Batas_Sektor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Sektor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Sektor_2.addFeatures(features_Batas_Sektor_2);
var lyr_Batas_Sektor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Sektor_2, 
                style: style_Batas_Sektor_2,
                popuplayertitle: 'Batas_Sektor',
                interactive: true,
                title: '<img src="styles/legend/Batas_Sektor_2.png" /> Batas_Sektor'
            });
var format_Administrasi_Koridor_3 = new ol.format.GeoJSON();
var features_Administrasi_Koridor_3 = format_Administrasi_Koridor_3.readFeatures(json_Administrasi_Koridor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Koridor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Koridor_3.addFeatures(features_Administrasi_Koridor_3);
var lyr_Administrasi_Koridor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_Koridor_3, 
                style: style_Administrasi_Koridor_3,
                popuplayertitle: 'Administrasi_Koridor',
                interactive: true,
                title: '<img src="styles/legend/Administrasi_Koridor_3.png" /> Administrasi_Koridor'
            });
var format_Koridor_Sungai_4 = new ol.format.GeoJSON();
var features_Koridor_Sungai_4 = format_Koridor_Sungai_4.readFeatures(json_Koridor_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Koridor_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koridor_Sungai_4.addFeatures(features_Koridor_Sungai_4);
var lyr_Koridor_Sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Koridor_Sungai_4, 
                style: style_Koridor_Sungai_4,
                popuplayertitle: 'Koridor_Sungai',
                interactive: true,
                title: '<img src="styles/legend/Koridor_Sungai_4.png" /> Koridor_Sungai'
            });
var format_Aliran_Cisanti_5 = new ol.format.GeoJSON();
var features_Aliran_Cisanti_5 = format_Aliran_Cisanti_5.readFeatures(json_Aliran_Cisanti_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aliran_Cisanti_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aliran_Cisanti_5.addFeatures(features_Aliran_Cisanti_5);
var lyr_Aliran_Cisanti_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aliran_Cisanti_5, 
                style: style_Aliran_Cisanti_5,
                popuplayertitle: 'Aliran_Cisanti',
                interactive: true,
                title: '<img src="styles/legend/Aliran_Cisanti_5.png" /> Aliran_Cisanti'
            });
var format_Aliran_Sungai_Citarum_6 = new ol.format.GeoJSON();
var features_Aliran_Sungai_Citarum_6 = format_Aliran_Sungai_Citarum_6.readFeatures(json_Aliran_Sungai_Citarum_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aliran_Sungai_Citarum_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aliran_Sungai_Citarum_6.addFeatures(features_Aliran_Sungai_Citarum_6);
var lyr_Aliran_Sungai_Citarum_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aliran_Sungai_Citarum_6, 
                style: style_Aliran_Sungai_Citarum_6,
                popuplayertitle: 'Aliran_Sungai_Citarum',
                interactive: true,
                title: '<img src="styles/legend/Aliran_Sungai_Citarum_6.png" /> Aliran_Sungai_Citarum'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Batas_Sektor_2.setVisible(true);lyr_Administrasi_Koridor_3.setVisible(true);lyr_Koridor_Sungai_4.setVisible(true);lyr_Aliran_Cisanti_5.setVisible(true);lyr_Aliran_Sungai_Citarum_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Batas_Sektor_2,lyr_Administrasi_Koridor_3,lyr_Koridor_Sungai_4,lyr_Aliran_Cisanti_5,lyr_Aliran_Sungai_Citarum_6];
lyr_Batas_Sektor_2.set('fieldAliases', {'Id': 'Id', 'Luas': 'Luas', 'Sektor': 'Sektor', });
lyr_Administrasi_Koridor_3.set('fieldAliases', {'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'Sektor': 'Sektor', 'Luas_Ha': 'Luas_Ha', });
lyr_Koridor_Sungai_4.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Shape_Leng': 'Shape_Leng', 'InLine_FID': 'InLine_FID', });
lyr_Aliran_Cisanti_5.set('fieldAliases', {'KETERANGAN': 'KETERANGAN', 'KODE_DAS': 'KODE_DAS', 'NAMA_DAS': 'NAMA_DAS', 'NAMA_SUBDA': 'NAMA_SUBDA', 'HULU_HILIR': 'HULU_HILIR', });
lyr_Aliran_Sungai_Citarum_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'KODE_UNSUR': 'KODE_UNSUR', 'NAMA_UNSUR': 'NAMA_UNSUR', 'TOPONIM': 'TOPONIM', 'PELAKSANA': 'PELAKSANA', 'UPDATED': 'UPDATED', 'Nama_Sunga': 'Nama_Sunga', 'Shape_Leng': 'Shape_Leng', });
lyr_Batas_Sektor_2.set('fieldImages', {'Id': 'Range', 'Luas': 'TextEdit', 'Sektor': 'TextEdit', });
lyr_Administrasi_Koridor_3.set('fieldImages', {'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'Sektor': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_Koridor_Sungai_4.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'InLine_FID': 'TextEdit', });
lyr_Aliran_Cisanti_5.set('fieldImages', {'KETERANGAN': 'TextEdit', 'KODE_DAS': 'TextEdit', 'NAMA_DAS': 'TextEdit', 'NAMA_SUBDA': 'TextEdit', 'HULU_HILIR': 'TextEdit', });
lyr_Aliran_Sungai_Citarum_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'KODE_UNSUR': 'TextEdit', 'NAMA_UNSUR': 'TextEdit', 'TOPONIM': 'TextEdit', 'PELAKSANA': 'TextEdit', 'UPDATED': 'TextEdit', 'Nama_Sunga': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Batas_Sektor_2.set('fieldLabels', {'Id': 'no label', 'Luas': 'no label', 'Sektor': 'no label', });
lyr_Administrasi_Koridor_3.set('fieldLabels', {'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'Sektor': 'no label', 'Luas_Ha': 'no label', });
lyr_Koridor_Sungai_4.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', 'Shape_Leng': 'no label', 'InLine_FID': 'no label', });
lyr_Aliran_Cisanti_5.set('fieldLabels', {'KETERANGAN': 'no label', 'KODE_DAS': 'no label', 'NAMA_DAS': 'no label', 'NAMA_SUBDA': 'no label', 'HULU_HILIR': 'no label', });
lyr_Aliran_Sungai_Citarum_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'KODE_UNSUR': 'no label', 'NAMA_UNSUR': 'no label', 'TOPONIM': 'no label', 'PELAKSANA': 'no label', 'UPDATED': 'no label', 'Nama_Sunga': 'no label', 'Shape_Leng': 'no label', });
lyr_Aliran_Sungai_Citarum_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});