function leap(){
    var year=parseInt(document.getElementById("val1"));
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.getElementById("ans").innerHTML="year is leap year"
    } else {
        document.getElementById("ans").innerHTML="year is not leap year"
    }
}