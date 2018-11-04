function windchill() {
    var f = 35.74 + (0.6215*t) - (35.75*Math.pow(s,0.16)) + (0.4275*t)*Mathpow(s,0.16)
    var t = parseFloat(document.getElementById("airtemp"));
    var s = parseFloat(document.getElementById("windspeed"));
    return f + "degrees Fahrenheit"
}