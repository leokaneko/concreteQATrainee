function countNamesLetters(names){

    var namesCount = names.map(function(val){
       return val + " : " + val.replace(/\W/g,"").length + " letras";
    });

    return namesCount;
}

function biggestNames(names){

    var maior = 0;
    for(var i = 0; i < names.length;i++){
        if(names[i].replace(/\W/g,"").length > maior)
            maior = names[i].replace(/\W/g,"").length;
    }

    var arr = names.filter(function(val){
        return val.replace(/\W/g,"").length == maior;
    });

    var str = "";
    for(var j = 0; j < arr.length; j++ ){
        str += arr[j] + " : " + arr[j].replace(/\W/g,"").length + " letras\n";
    }

    return str;
}

console.log(countNamesLetters(["Leonardo Kaneko","Bernardo Kaneko","Likoran Kaneko"]));
console.log(biggestNames(["Leonardo Kaneko","Bernardo Kaneko","Likoran Kaneko"]));

