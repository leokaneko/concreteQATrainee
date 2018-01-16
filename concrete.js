function countNamesLetters(names){

    var namesCount = names.map(function(val){
       return val + " : " + val.replace(/\W/g,"").length + " letras";
    });

    return namesCount;
}

console.log(countNamesLetters(["Leonardo Kaneko","Bernardo Kaneko","Likoran Kaneko"]));


var timeStart = Date.now();
console.log(timeStart);
for(var i= 0; i < 100; i++){
    countNamesLetters(["Leonardo Kaneko","Bernardo Kaneko","Likoran Kaneko"]);
}
var timeEnd = Date.now();
//performance test
console.log("Duration " + (timeEnd - timeStart) + " ms . . .");