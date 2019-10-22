"use strict";

Object.size = function (obj) {
    var size = 0;
    for (var key in obj) if (obj.hasOwnProperty(key)) size++;
    return size;
};

function testMain(filename) {
    
let api = ggbApplet;
    let xA = api.getValue("x(A)");
    let xB = api.getValue("x(B)");
    let xC = api.getValue("x(C)");
    let yA = api.getValue("y(A)");
    let yB = api.getValue("y(B)");
    let yC = api.getValue("y(C)");
    let xG = api.getValue("x(G)");
    let yG = api.getValue("y(G)");
    let xx = (xA+xB+xC)/3;
    let yy = (yA+yB+yC)/3;
    let maxpoints = 2;   
    let points = 0; 
    if ( xG == xx && yG == yy ) points = maxpoints; 
    return {
       "usercode": ggbApplet.getValueString('G'),
       "userpts":  timgeo.getObjValue(ggbApplet,"D"),
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