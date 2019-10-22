"use strict";

Object.size = function (obj) {
    var size = 0;
    for (var key in obj) if (obj.hasOwnProperty(key)) size++;
    return size;
};

function testMain(filename) {
    
let api = ggbApplet;
    let EF = api.getValue("Jana(E,F)");
    let DE = api.getValue("f");
    let DF = api.getValue("Jana(D,F)");
    let AB = api.getValue("c");
    let BC = api.getValue("a");
    let AC = api.getValue("b");
    let suhde = Math.round(EF/BC*10)/10;
    var vaihtoehto = 0;
    if ( suhde == 1.5 ) vaihtoehto = 1;
    let maxpoints = 2;   
    let points = 0; 
    if ( vaihtoehto == 0 ) if ( Math.round(EF/AC*100)/100 == 0.75 && Math.round(DF/BC*100)/100 == 0.75 && Math.round(DE/AB*100)/100 == 0.75 )  points = maxpoints; 
    if ( vaihtoehto == 1 ) if ( Math.round(EF/BC*10)/10 == 1.5 && Math.round(DF/AB*10)/10 == 1.5 && Math.round(DE/AC*10)/10 == 1.5 ) points = maxpoints;
    
    return {
       "usercode": vaihtoehto,
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