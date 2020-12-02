function watch() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes() + s / 60;
    var h = d.getHours() + m / 60 + s / 3600;
    document.querySelector("#h_hand").style.transform = "rotate(" + (h * (360 / 12)-90) + "deg)";
    document.querySelector("#m_hand").style.transform = "rotate(" + (m * (360 / 60)-90) + "deg)";
    document.querySelector("#s_hand").style.transform = "rotate(" + (s * (360 / 60)-90) + "deg)";
}
setInterval(watch, 1000);

