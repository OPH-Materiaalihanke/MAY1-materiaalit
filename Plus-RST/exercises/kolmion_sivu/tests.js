"use strict";

Object.size = function (obj) {
    var size = 0;
    for (var key in obj) if (obj.hasOwnProperty(key)) size++;
    return size;
};

function testMain(filename) {
    
let api = ggbApplet;
    let vastaus = api.getValue("a");
    let mallivastaus = Math.sqrt(5*5+7*7-2*5*7*Math.cos(72*Math.PI/180));
    let maxpoints = 2;   
    let points = 0;
    if ( Math.round(vastaus*100)/100 == Math.round(mallivastaus*100)/100 ) points = maxpoints; 
    return {
       "usercode": ggbApplet.getValue('a'),
       "userpts":  timgeo.getObjValue(ggbApplet,"a"),
       "data": ggbApplet.getBase64(),
       "points": points, 
   };

    return {
        points: return_values.points,
        max_points: 2,  //ONKO NÄIN?
        msg: return_values.message
    };
}

if (require.main === module) {

    var filename;
    try {
        filename = process.argv[2];
    } catch (exp) { console.log(exp); return false; }

    var result = testMain(filename);
    console.log(result.points+"/"+result.max_points+"<br>");
    console.log(result.msg+"<br>");
    console.error("TotalPoints: ", result.points);	    
    console.error("MaxPoints: ", result.max_points);
    console.error("filename: "+fileName);
    //console.error(teacherInput);
    console.error(result.message);
        
    return true;

}