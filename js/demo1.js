//code js
var x;
//let y=20;
x = "hello"; //dynamic datatype
var t = true;
console.log(x); // print
var y = 20;
var z = y+10; //30
var k = x+y; // hello20
var u = y+x; // 20hello
var o = y+"world"; // 20world
var p = "hello" + "world"; // helloworld
var a = "20" + "22"; //2022
console.log(a);
console.log(y);
var b = 5 + 10 + 15 + "a"; //30a

if(y>10){

}else if(y>15){

}else{

}
//for (var j=0;j<10;J++){


console.log("gia tri cua y = "+20+",gia tri dep");
console.log(`gia tri cua y = ${y} , gia tri dep`);

// Khai bao 1 ham
function tinhtong(a,b){
    //return a+b;
    console.log(a+b);
}
var kq = tinhtong(4,5);

var arr = [];
arr[0] = 15;
arr[1] = "abc";
arr[2] = true;
arr.push(17);
arr.push("xyz");
arr.push([3,2,1]);
for (var i=0;i< arr.length;i++){
    console.log(arr[1]);
}

//alert("Alert");

//var rs = confirm("ban co chac muon nop bai");
//if (rs == true){
   // console.log("nguoi dung da dong y");
//}else{
  //  console.log("huy bo chien dich")
//}

// var s = prompt("vui long nhap ten");
// console.log(s);
//nếu nhập + ok --> string;
//nếu không nhập --> string rỗng;
//nếu nhấn cancel --> null;

// setTimeout(function (){
//     alert("hello");
// }, 3000)
var i = 0;

setInterval(function (){
    console.log("i="+i);
    i++;
},3000)