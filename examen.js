
require ([
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/tasks/ServiceAreaTask",
    "esri/tasks/ServiceAreaParameters",
    "esri/graphic",
    "esri/tasks/FeatureSet",
    
    "esri/tasks/query",
    "esri/symbols/SimpleLineSymbol",
    "dojo/on",
    "dojo/domReady!",


],
    function (Map,FeatureLayer,ServiceAreaTask,ServiceAreaParameters,graphic,FeatureSet,Query,SimpleLineSymbol,on){
        var map = new Map("map", {
            basemap: "topo",
            center:[-3.7025600,40.4165000],
            zoom: 13,
        
        });
        var capa = "https://services5.arcgis.com/zZdalPw2d0tQx8G1/ArcGIS/rest/services/CENTROS_SALUD_examen/FeatureServer/0"
        
        var servicio = new FeatureLayer(capa,{
            outFields:[]
            
        })

        console.log(servicio)
        map.addLayer(servicio)

            var miquery = new Query();
                miquery.where = '1 = 1';
                servicio.selectFeatures(miquery);
                servicio.on('selection-complete', seleccion)

        function seleccion(result) {
        
        var features= [result];

        var featureSet = new FeatureSet();
        featureSet.features = features;
        console.log(featureSet,"ssz")

        var params = new ServiceAreaParameters();
            params.defaultBreaks= [3];
            params.facilities = ;
            impedanceAttribute= "Tiempopie";
        }
        

        
    
           var simbologia = new SimpleLineSymbol("solid", 
                new Color([232,104,80]), 2)
                new Color([232,104,80,0.25])
            
        
        taskservice = new ServiceAreaTask("https://formacion.esri.es/server/rest/services/RedMadrid/NAServer")
        

        
        // features.push(elemento);
        // var parametros = new ServiceAreaParameters("https://formacion.esri.es/server/rest/services/RedMadrid/NAServer");

        // parametros.defaultBreaks = [3];
        // var features = 
        // var facilities = new FeatureSet();
        // facilities.features = features;
        // parametros.facilities = facilities;
        // var elemento = new Graphic(features,);
        // // features.push(elemento);
        // console.log(features)

        
        


});