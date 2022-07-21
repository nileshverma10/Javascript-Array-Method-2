        //  includes

var a = ["umesh", "ramesh", "suresh", "kajal", "pari"];
var b = a.includes("suresh");
console.log(b);


    //   some


var a = [23,3,45,342,];
var b = a.some(checkadult);
function checkadult(age){
     return age>=18;
}
console.log(b);


        // some

var a = ["umesh", "ramesh", "suresh", "kajal", "pari"];
var b = a.some(checkname);
function checkname(age){
    return age="suresh";
}
console.log(b);


    //    every

var a = [23,32,45,32,];
var b = a.every(checkadult);
function checkadult(age){
     return age>=18;
}
console.log(b);


        // find

var a = ["umesh", "ramesh", "suresh", "kajal", "pari"];
var b = a.find(checkname);
 function checkname(age){
   return age="suresh";
 } console.log(b);



    //   find

 var a = ["umesh", "ramesh", "suresh", "kajal", "pari"];
 var b = a.find("kajal");
 console.log(b);

var a = [3,32,45,32,];
var b = a.find(checkadult);
function checkadult(age){
      return age>=18;
}
 console.log(b);


    //   findIndex


 var a = [3,2,45,32,];
var b = a.findIndex(checkadult);
function checkadult(age){
      return age>=18;
}
 console.log(b);


    //  search


var a = [3,32,45,32, 23,4,56,,443,667,44,776,44,6,7,87,43,6,];
var b = a.filter(search);
function search (age){
    return age>=18;
}
console.log(b);


        //   toString

var a = ["umesh", "ramesh", "suresh", "kajal", "pari"];
a.toString();
console.log(a);

  
    //  fill

var a = ["umesh", "ramesh", "suresh", "kajal", "pari"];
 var b= a.fill("shyam");
console.log(b);


    //   foreach

var a = ["umesh", "ramesh", "suresh", "kajal", "pari"];
a.forEach(loop);
function loop(hum){

}
console.log(hum);


    //    map

var a =[23,34,56,78,989,55,877,65,];
var b = a.map(test);
function test(mul){
    return mul*10;

}
console.log(b);
