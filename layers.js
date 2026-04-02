var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'Реки',
                interactive: false,
                title: '<img src="styles/legend/_0.png" /> Реки'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'центры',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> центры'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'облока',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> облока'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Грибы',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Грибы'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Бабочки',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Бабочки'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Иван чай узколистный',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Иван чай узколистный'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5];
lyr__0.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'NAME_EN': 'NAME_EN', 'NAME_RU': 'NAME_RU', 'WATERWAY': 'WATERWAY', 'OSM_TYPE': 'OSM_TYPE', 'OSM_ID': 'OSM_ID', });
lyr__1.set('fieldAliases', {'fid': 'fid', 'R_name': 'R_name', 'NAME': 'NAME', 'Status_pp': 'Status_pp', 'popul_2010': 'popul_2010', 'индекс': 'индекс', 'Okato': 'Okato', 'Oktmo_NP': 'Oktmo_NP', 'Name_settlement': 'Name_settlement', 'municipal_region': 'municipal_region', 'Type_settlement': 'Type_settlement', 'kladr': 'kladr', 'NAME_alt': 'NAME_alt', 'adm_level': 'adm_level', 'Subject': 'Subject', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'file_puth': 'file_puth', 'Дата и время': 'Дата и время', 'место': 'место', 'Описание': 'Описание', 'погодные условия': 'погодные условия', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'file_puth': 'file_puth', 'дата и время': 'дата и время', 'Место': 'Место', 'Погодные условия': 'Погодные условия', 'Название': 'Название', 'фенологическая фаза': 'фенологическая фаза', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'file_puth': 'file_puth', 'Дата и время': 'Дата и время', 'Место': 'Место', 'погодные условия': 'погодные условия', 'название животного': 'название животного', 'краткое описание внешнего вида и поведения животного': 'краткое описание внешнего вида и поведения животного', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'file_puth': 'file_puth', 'Дата и время': 'Дата и время', 'место': 'место', 'погодные условия': 'погодные условия', 'Название': 'Название', 'фенологическая фаза': 'фенологическая фаза', });
lyr__0.set('fieldImages', {'fid': '', 'NAME': '', 'NAME_EN': '', 'NAME_RU': '', 'WATERWAY': '', 'OSM_TYPE': '', 'OSM_ID': '', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'R_name': 'TextEdit', 'NAME': 'TextEdit', 'Status_pp': 'TextEdit', 'popul_2010': 'TextEdit', 'индекс': 'TextEdit', 'Okato': 'TextEdit', 'Oktmo_NP': 'TextEdit', 'Name_settlement': 'TextEdit', 'municipal_region': 'TextEdit', 'Type_settlement': 'TextEdit', 'kladr': 'TextEdit', 'NAME_alt': 'TextEdit', 'adm_level': 'TextEdit', 'Subject': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'file_puth': 'ExternalResource', 'Дата и время': '', 'место': '', 'Описание': '', 'погодные условия': '', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'file_puth': 'ExternalResource', 'дата и время': '', 'Место': '', 'Погодные условия': '', 'Название': '', 'фенологическая фаза': '', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', 'file_puth': 'ExternalResource', 'Дата и время': '', 'Место': '', 'погодные условия': '', 'название животного': '', 'краткое описание внешнего вида и поведения животного': '', });
lyr__5.set('fieldImages', {'fid': 'TextEdit', 'file_puth': 'ExternalResource', 'Дата и время': '', 'место': '', 'погодные условия': '', 'Название': '', 'фенологическая фаза': '', });
lyr__0.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'NAME_EN': 'no label', 'NAME_RU': 'no label', 'WATERWAY': 'no label', 'OSM_TYPE': 'no label', 'OSM_ID': 'no label', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'R_name': 'inline label - always visible', 'NAME': 'no label', 'Status_pp': 'no label', 'popul_2010': 'no label', 'индекс': 'no label', 'Okato': 'no label', 'Oktmo_NP': 'no label', 'Name_settlement': 'no label', 'municipal_region': 'no label', 'Type_settlement': 'no label', 'kladr': 'no label', 'NAME_alt': 'no label', 'adm_level': 'no label', 'Subject': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'file_puth': 'inline label - visible with data', 'Дата и время': 'inline label - visible with data', 'место': 'inline label - visible with data', 'Описание': 'inline label - visible with data', 'погодные условия': 'inline label - visible with data', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'file_puth': 'inline label - visible with data', 'дата и время': 'inline label - visible with data', 'Место': 'inline label - visible with data', 'Погодные условия': 'inline label - visible with data', 'Название': 'inline label - visible with data', 'фенологическая фаза': 'inline label - visible with data', });
lyr__4.set('fieldLabels', {'fid': 'no label', 'file_puth': 'inline label - visible with data', 'Дата и время': 'inline label - visible with data', 'Место': 'inline label - visible with data', 'погодные условия': 'inline label - visible with data', 'название животного': 'inline label - visible with data', 'краткое описание внешнего вида и поведения животного': 'inline label - visible with data', });
lyr__5.set('fieldLabels', {'fid': 'no label', 'file_puth': 'inline label - visible with data', 'Дата и время': 'inline label - visible with data', 'место': 'inline label - visible with data', 'погодные условия': 'inline label - visible with data', 'Название': 'inline label - visible with data', 'фенологическая фаза': 'inline label - visible with data', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});