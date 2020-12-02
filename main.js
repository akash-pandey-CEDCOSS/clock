function watch() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes() + s / 60;
    var h = d.getHours() + m / 60 + s / 3600;
    document.querySelector("#h_hand").style.transform = "rotate(" + (h * (360 / 12)-90) + "deg)";
    document.querySelector("#m_hand").style.transform = "rotate(" + (m * (360 / 60)-90) + "deg)";
    document.querySelector("#s_hand").style.transform = "rotate(" + (s * (360 / 60)-90) + "deg)";

   
    var s1 = d.getSeconds();
    var m1 = d.getMinutes() ;
    var h1 = d.getHours() ;
    var h2=h1-12;
    if(h1>=12){
        document.getElementById("digital").innerHTML=h2+":"+m1+":"+s1+" PM";

    }else{
        document.getElementById("digital").innerHTML=h1+":"+m1+":"+s1+" AM";

    }
   

}
setInterval(watch, 1000);


