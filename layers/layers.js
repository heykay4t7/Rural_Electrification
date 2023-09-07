ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32736").setExtent([713204.052504, 8338580.286358, 714410.990527, 8339188.561153]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EXISTING1PHASELV_2 = new ol.format.GeoJSON();
var features_EXISTING1PHASELV_2 = format_EXISTING1PHASELV_2.readFeatures(json_EXISTING1PHASELV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_EXISTING1PHASELV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXISTING1PHASELV_2.addFeatures(features_EXISTING1PHASELV_2);
var lyr_EXISTING1PHASELV_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EXISTING1PHASELV_2, 
                style: style_EXISTING1PHASELV_2,
                interactive: true,
                title: '<img src="styles/legend/EXISTING1PHASELV_2.png" /> EXISTING 1PHASE LV'
            });
var format_SERVICECABLE_3 = new ol.format.GeoJSON();
var features_SERVICECABLE_3 = format_SERVICECABLE_3.readFeatures(json_SERVICECABLE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_SERVICECABLE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICECABLE_3.addFeatures(features_SERVICECABLE_3);
var lyr_SERVICECABLE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SERVICECABLE_3, 
                style: style_SERVICECABLE_3,
                interactive: true,
                title: '<img src="styles/legend/SERVICECABLE_3.png" /> SERVICE CABLE'
            });
var format_PROPOSED3PHASE_4 = new ol.format.GeoJSON();
var features_PROPOSED3PHASE_4 = format_PROPOSED3PHASE_4.readFeatures(json_PROPOSED3PHASE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_PROPOSED3PHASE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPOSED3PHASE_4.addFeatures(features_PROPOSED3PHASE_4);
var lyr_PROPOSED3PHASE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROPOSED3PHASE_4, 
                style: style_PROPOSED3PHASE_4,
                interactive: true,
                title: '<img src="styles/legend/PROPOSED3PHASE_4.png" /> PROPOSED 3PHASE'
            });
var format_PROPOSED1PHASELVLINE_5 = new ol.format.GeoJSON();
var features_PROPOSED1PHASELVLINE_5 = format_PROPOSED1PHASELVLINE_5.readFeatures(json_PROPOSED1PHASELVLINE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_PROPOSED1PHASELVLINE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROPOSED1PHASELVLINE_5.addFeatures(features_PROPOSED1PHASELVLINE_5);
var lyr_PROPOSED1PHASELVLINE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROPOSED1PHASELVLINE_5, 
                style: style_PROPOSED1PHASELVLINE_5,
                interactive: true,
                title: '<img src="styles/legend/PROPOSED1PHASELVLINE_5.png" /> PROPOSED 1PHASELV LINE'
            });
var format_Transformers_1_6 = new ol.format.GeoJSON();
var features_Transformers_1_6 = format_Transformers_1_6.readFeatures(json_Transformers_1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Transformers_1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transformers_1_6.addFeatures(features_Transformers_1_6);
var lyr_Transformers_1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transformers_1_6, 
                style: style_Transformers_1_6,
                interactive: true,
                title: '<img src="styles/legend/Transformers_1_6.png" /> Transformers_1'
            });
var format_LVStructurelv_structure_7 = new ol.format.GeoJSON();
var features_LVStructurelv_structure_7 = format_LVStructurelv_structure_7.readFeatures(json_LVStructurelv_structure_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_LVStructurelv_structure_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LVStructurelv_structure_7.addFeatures(features_LVStructurelv_structure_7);
var lyr_LVStructurelv_structure_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LVStructurelv_structure_7, 
                style: style_LVStructurelv_structure_7,
                interactive: true,
    title: 'LV Structure — lv_structure<br />\
    <img src="styles/legend/LVStructurelv_structure_7_0.png" /> LV Existing<br />\
    <img src="styles/legend/LVStructurelv_structure_7_1.png" /> MV Existing<br />\
    <img src="styles/legend/LVStructurelv_structure_7_2.png" /> Others<br />\
    <img src="styles/legend/LVStructurelv_structure_7_3.png" /> Proposed LV<br />\
    <img src="styles/legend/LVStructurelv_structure_7_4.png" /> Proposed MV<br />'
        });
var format_HouseHold_8 = new ol.format.GeoJSON();
var features_HouseHold_8 = format_HouseHold_8.readFeatures(json_HouseHold_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_HouseHold_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HouseHold_8.addFeatures(features_HouseHold_8);
var lyr_HouseHold_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HouseHold_8, 
                style: style_HouseHold_8,
                interactive: true,
                title: '<img src="styles/legend/HouseHold_8.png" /> HouseHold'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_EXISTING1PHASELV_2.setVisible(true);lyr_SERVICECABLE_3.setVisible(true);lyr_PROPOSED3PHASE_4.setVisible(true);lyr_PROPOSED1PHASELVLINE_5.setVisible(true);lyr_Transformers_1_6.setVisible(true);lyr_LVStructurelv_structure_7.setVisible(true);lyr_HouseHold_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_EXISTING1PHASELV_2,lyr_SERVICECABLE_3,lyr_PROPOSED3PHASE_4,lyr_PROPOSED1PHASELVLINE_5,lyr_Transformers_1_6,lyr_LVStructurelv_structure_7,lyr_HouseHold_8];
lyr_EXISTING1PHASELV_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'PHASE': 'PHASE', });
lyr_SERVICECABLE_3.set('fieldAliases', {'fid': 'fid', 'date&time': 'date&time', 'Material N': 'Material N', 'Marketer\'s': 'Marketer\'s', 'X': 'X', 'Y': 'Y', 'Cluster ID': 'Cluster ID', 'Load': 'Load', 'Service Po': 'Service Po', 'Region': 'Region', 'Additional': 'Additional', 'Pole Numbe': 'Pole Numbe', 'Phases': 'Phases', 'Premises T': 'Premises T', 'Premises C': 'Premises C', 'Tension': 'Tension', 'Phase': 'Phase', 'Customer T': 'Customer T', 'ID type': 'ID type', 'ID Issue D': 'ID Issue D', 'ID  Expiry': 'ID  Expiry', 'First Name': 'First Name', 'Middle Nam': 'Middle Nam', 'Surname': 'Surname', 'Title': 'Title', 'Applicant': 'Applicant', 'Gender': 'Gender', 'Telephone': 'Telephone', 'Payment ty': 'Payment ty', 'Request Ty': 'Request Ty', 'Activity': 'Activity', ' Sub activ': ' Sub activ', 'Service Ty': 'Service Ty', 'Hse Income': 'Hse Income', 'Hse Provid': 'Hse Provid', 'Req Power': 'Req Power', 'Supply Typ': 'Supply Typ', 'Project Ty': 'Project Ty', 'I.D Number': 'I.D Number', 'Payment _1': 'Payment _1', 'Service Dr': 'Service Dr', 'District': 'District', 'Area': 'Area', 'Street': 'Street', 'lenght of': 'lenght of', 'fid_2': 'fid_2', 'Type': 'Type', 'Details': 'Details', 'Comments': 'Comments', 'ESCOM Staf': 'ESCOM Staf', 'Colenco St': 'Colenco St', 'date&time_': 'date&time_', 'X_2': 'X_2', 'Y_2': 'Y_2', 'Phase_2': 'Phase_2', 'distance': 'distance', });
lyr_PROPOSED3PHASE_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Phase': 'Phase', 'Lenght': 'Lenght', });
lyr_PROPOSED1PHASELVLINE_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Phase': 'Phase', 'Length': 'Length', });
lyr_Transformers_1_6.set('fieldAliases', {'fid': 'fid', 'Code': 'Transformer Code', 'Ratings': 'Trans Ratings', 'Date': 'date&time', 'SS_Num': 'SS_Num', 'ESCOM Staf': 'ESCOM Staf', 'Colenco St': 'Colenco St', 'X': 'Easting Coordinate', 'Y': 'Northing Coordinate', });
lyr_LVStructurelv_structure_7.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Details': 'Details', 'Comments': 'Comments', 'ESCOM Staf': 'ESCOM Staf', 'Colenco St': 'Colenco St', 'date&time': 'date&time', 'X': 'X', 'Y': 'Y', 'Phase': 'Phase', });
lyr_HouseHold_8.set('fieldAliases', {'fid': 'fid', 'date&time': 'date&time', 'Material N': 'Material N', 'Marketer\'s': 'Marketer\'s', 'X': 'Easting Coordinate', 'Y': 'Northing Coordinate', 'Cluster ID': 'Cluster ID', 'Load': 'Load', 'Service Po': 'Service Po', 'Region': 'Region', 'Additional': 'Additional', 'Pole Numbe': 'Pole Numbe', 'Phases': 'Phases', 'Premises T': 'Premises T', 'Premises C': 'Premises C', 'Tension': 'Tension', 'Phase': 'Phase', 'Customer T': 'Customer T', 'ID type': 'ID type', 'ID Issue D': 'ID Issue D', 'ID  Expiry': 'ID  Expiry', 'First Name': 'First Name', 'Middle Nam': 'Middle Nam', 'Surname': 'Surname', 'Title': 'Title', 'Applicant': 'Applicant', 'Gender': 'Gender', 'Telephone': 'Telephone', 'Payment ty': 'Payment ty', 'Request Ty': 'Request Ty', 'Activity': 'Activity', ' Sub activ': ' Sub activ', 'Service Ty': 'Service Ty', 'Hse Income': 'Hse Income', 'Hse Provid': 'Hse Provid', 'Req Power': 'Req Power', 'Supply Typ': 'Supply Typ', 'Project Ty': 'Project Ty', 'I.D Number': 'I.D Number', 'Payment _1': 'Payment _1', 'Service Dr': 'Service Dr', 'District': 'District', 'Area': 'Area', 'Street': 'Street', 'lenght of': 'lenght of', });
lyr_EXISTING1PHASELV_2.set('fieldImages', {'fid': '', 'id': '', 'PHASE': '', });
lyr_SERVICECABLE_3.set('fieldImages', {'fid': '', 'date&time': '', 'Material N': '', 'Marketer\'s': '', 'X': '', 'Y': '', 'Cluster ID': '', 'Load': '', 'Service Po': '', 'Region': '', 'Additional': '', 'Pole Numbe': '', 'Phases': '', 'Premises T': '', 'Premises C': '', 'Tension': '', 'Phase': '', 'Customer T': '', 'ID type': '', 'ID Issue D': '', 'ID  Expiry': '', 'First Name': '', 'Middle Nam': '', 'Surname': '', 'Title': '', 'Applicant': '', 'Gender': '', 'Telephone': '', 'Payment ty': '', 'Request Ty': '', 'Activity': '', ' Sub activ': '', 'Service Ty': '', 'Hse Income': '', 'Hse Provid': '', 'Req Power': '', 'Supply Typ': '', 'Project Ty': '', 'I.D Number': '', 'Payment _1': '', 'Service Dr': '', 'District': '', 'Area': '', 'Street': '', 'lenght of': '', 'fid_2': '', 'Type': '', 'Details': '', 'Comments': '', 'ESCOM Staf': '', 'Colenco St': '', 'date&time_': '', 'X_2': '', 'Y_2': '', 'Phase_2': '', 'distance': '', });
lyr_PROPOSED3PHASE_4.set('fieldImages', {'fid': '', 'id': '', 'Phase': '', 'Lenght': '', });
lyr_PROPOSED1PHASELVLINE_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Phase': '', 'Length': '', });
lyr_Transformers_1_6.set('fieldImages', {'fid': 'TextEdit', 'Code': 'TextEdit', 'Ratings': 'ValueMap', 'Date': 'DateTime', 'SS_Num': 'TextEdit', 'ESCOM Staf': '', 'Colenco St': '', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_LVStructurelv_structure_7.set('fieldImages', {'fid': 'TextEdit', 'Type': 'ValueMap', 'Details': 'ValueMap', 'Comments': 'TextEdit', 'ESCOM Staf': 'TextEdit', 'Colenco St': 'TextEdit', 'date&time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Phase': 'ValueMap', });
lyr_HouseHold_8.set('fieldImages', {'fid': 'Hidden', 'date&time': 'DateTime', 'Material N': 'TextEdit', 'Marketer\'s': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Cluster ID': 'TextEdit', 'Load': 'ValueMap', 'Service Po': 'TextEdit', 'Region': 'ValueRelation', 'Additional': 'TextEdit', 'Pole Numbe': 'TextEdit', 'Phases': 'ValueRelation', 'Premises T': 'TextEdit', 'Premises C': 'TextEdit', 'Tension': 'ValueRelation', 'Phase': 'ValueRelation', 'Customer T': 'TextEdit', 'ID type': 'TextEdit', 'ID Issue D': 'TextEdit', 'ID  Expiry': 'TextEdit', 'First Name': 'TextEdit', 'Middle Nam': 'TextEdit', 'Surname': 'TextEdit', 'Title': 'ValueRelation', 'Applicant': 'TextEdit', 'Gender': 'ValueMap', 'Telephone': 'TextEdit', 'Payment ty': 'TextEdit', 'Request Ty': 'TextEdit', 'Activity': 'TextEdit', ' Sub activ': '', 'Service Ty': 'TextEdit', 'Hse Income': 'TextEdit', 'Hse Provid': 'TextEdit', 'Req Power': 'TextEdit', 'Supply Typ': 'TextEdit', 'Project Ty': 'TextEdit', 'I.D Number': 'TextEdit', 'Payment _1': 'TextEdit', 'Service Dr': 'Range', 'District': 'ValueRelation', 'Area': 'ValueRelation', 'Street': 'ValueRelation', 'lenght of': 'TextEdit', });
lyr_EXISTING1PHASELV_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'PHASE': 'no label', });
lyr_SERVICECABLE_3.set('fieldLabels', {'fid': 'no label', 'date&time': 'no label', 'Material N': 'no label', 'Marketer\'s': 'no label', 'X': 'no label', 'Y': 'no label', 'Cluster ID': 'no label', 'Load': 'no label', 'Service Po': 'no label', 'Region': 'no label', 'Additional': 'no label', 'Pole Numbe': 'no label', 'Phases': 'no label', 'Premises T': 'no label', 'Premises C': 'no label', 'Tension': 'no label', 'Phase': 'no label', 'Customer T': 'no label', 'ID type': 'no label', 'ID Issue D': 'no label', 'ID  Expiry': 'no label', 'First Name': 'no label', 'Middle Nam': 'no label', 'Surname': 'no label', 'Title': 'no label', 'Applicant': 'no label', 'Gender': 'no label', 'Telephone': 'no label', 'Payment ty': 'inline label', 'Request Ty': 'no label', 'Activity': 'no label', ' Sub activ': 'no label', 'Service Ty': 'no label', 'Hse Income': 'no label', 'Hse Provid': 'no label', 'Req Power': 'no label', 'Supply Typ': 'no label', 'Project Ty': 'no label', 'I.D Number': 'no label', 'Payment _1': 'no label', 'Service Dr': 'no label', 'District': 'no label', 'Area': 'no label', 'Street': 'no label', 'lenght of': 'no label', 'fid_2': 'no label', 'Type': 'no label', 'Details': 'no label', 'Comments': 'no label', 'ESCOM Staf': 'no label', 'Colenco St': 'no label', 'date&time_': 'no label', 'X_2': 'inline label', 'Y_2': 'no label', 'Phase_2': 'no label', 'distance': 'no label', });
lyr_PROPOSED3PHASE_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Phase': 'inline label', 'Lenght': 'no label', });
lyr_PROPOSED1PHASELVLINE_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Phase': 'no label', 'Length': 'no label', });
lyr_Transformers_1_6.set('fieldLabels', {'fid': 'no label', 'Code': 'inline label', 'Ratings': 'inline label', 'Date': 'inline label', 'SS_Num': 'inline label', 'ESCOM Staf': 'no label', 'Colenco St': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_LVStructurelv_structure_7.set('fieldLabels', {'fid': 'no label', 'Type': 'inline label', 'Details': 'inline label', 'Comments': 'inline label', 'ESCOM Staf': 'no label', 'Colenco St': 'no label', 'date&time': 'no label', 'X': 'no label', 'Y': 'no label', 'Phase': 'inline label', });
lyr_HouseHold_8.set('fieldLabels', {'date&time': 'no label', 'Material N': 'no label', 'Marketer\'s': 'no label', 'X': 'no label', 'Y': 'no label', 'Cluster ID': 'no label', 'Load': 'no label', 'Service Po': 'no label', 'Region': 'inline label', 'Additional': 'no label', 'Pole Numbe': 'no label', 'Phases': 'no label', 'Premises T': 'no label', 'Premises C': 'no label', 'Tension': 'no label', 'Phase': 'no label', 'Customer T': 'no label', 'ID type': 'no label', 'ID Issue D': 'no label', 'ID  Expiry': 'no label', 'First Name': 'inline label', 'Middle Nam': 'inline label', 'Surname': 'inline label', 'Title': 'inline label', 'Applicant': 'no label', 'Gender': 'no label', 'Telephone': 'no label', 'Payment ty': 'no label', 'Request Ty': 'no label', 'Activity': 'no label', ' Sub activ': 'no label', 'Service Ty': 'no label', 'Hse Income': 'inline label', 'Hse Provid': 'inline label', 'Req Power': 'no label', 'Supply Typ': 'no label', 'Project Ty': 'no label', 'I.D Number': 'no label', 'Payment _1': 'no label', 'Service Dr': 'no label', 'District': 'inline label', 'Area': 'no label', 'Street': 'no label', 'lenght of': 'no label', });
lyr_HouseHold_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});