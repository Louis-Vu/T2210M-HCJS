
var min = 10,sec=0;
var timer = setInterval(function (){
    var  span_min = document.getElementById("minutes")
    var span_sec = document.getElementById("sec")
    var m = min<10?"0"+min:min;
    var s = sec<10?"0"+sec:sec;// toán tử 3 ngôi
     console.log(m+":"+s);
    span min.innerText = m;
    span sec.innerText = s;
    s--;
    if (s < 0){
        s=59;
        m--;
    }
    if (m < 0){
        clearInterval(timer);
    }
},10000)