"use strict";

Object.size = function (obj) {
    var size = 0;
    for (var key in obj) if (obj.hasOwnProperty(key)) size++;
    return size;
};

function testMain(filename) {
    
let api = ggbApplet;        // lyhennetään api:n nimi
    let s = timgeo.getCommands(api);
    let maxpoints = 2;   
    let points = 0;             // Lasketaan pisteet sovituilla säännöillä
    let et = timgeo.getPureValue(ggbApplet, "etäisyysFC");  
    if ( et <= 9.3 && et >= 9.1 ) points = maxpoints; 
    return {
      "usercmds": s,
      "usercode": et,
      "points": points,        // Palautetaan myös tehtävän pistemäärä
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