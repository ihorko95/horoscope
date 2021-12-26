function zodiac_sign(day, month)
    {
        let astro_sign="";

        if (month == 1){
            if (day < 20)
            astro_sign = "capricorn";
            else
            astro_sign = "aquarius";
        }
               
        else if (month == 2){
            if (day < 19)
            astro_sign = "aquarius";
            else
            astro_sign = "pisces";
        }
               
        else if(month == 3){
            if (day < 21)
            astro_sign = "pisces";
            else
            astro_sign = "aries";
        }
        else if (month == 4){
            if (day < 20)
            astro_sign = "aries";
            else
            astro_sign = "taurus";
        }
               
        else if (month == 5){
            if (day < 21)
            astro_sign = "taurus";
            else
            astro_sign = "gemini";
        }
               
        else if( month == 6){
            if (day < 21)
            astro_sign = "gemini";
            else
            astro_sign = "cancer";
        }
               
        else if (month == 7){
            if (day < 23)
            astro_sign = "cancer";
            else
            astro_sign = "leo";
        }
               
        else if( month == 8){
            if (day < 23)
            astro_sign = "leo";
            else
            astro_sign = "virgo";
        }
               
        else if (month == 9){
            if (day < 23)
            astro_sign = "virgo";
            else
            astro_sign = "libra";
        }
               
        else if (month == 10){
            if (day < 23)
            astro_sign = "libra";
            else
            astro_sign = "scorpio";
        }
               
        else if (month == 11){
            if (day < 22)
            astro_sign = "scorpio";
            else
            astro_sign = "sagittarius";
        }
        else if (month == 12){    
            if (day < 22)
            astro_sign = "sagittarius";
            else
            astro_sign ="capricorn";
        }
        return astro_sign;     
}


function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data.json', true);
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == "200") {
    
                // .open will NOT return a value but simply returns undefined in async mode so use a callback
                callback(xobj.responseText);
    
            }
        }
        xobj.send(null);
    
}   

function getFormData(event) {
    
    event.preventDefault();
    var date = document.getElementById("date").value;
    if(!date)   alert('Input date please!');
    else{
        
        date= date.split("-");
        let day = parseInt(date[2],10);
        let month = parseInt(date[1],10);
        let sign= zodiac_sign(day, month);

        let predictDay=0;

        var inp = document.getElementsByName('r');
        for (var i = 0; i < inp.length; i++) {
            if (inp[i].type == "radio" && inp[i].checked) {
               predictDay= inp[i].value;
               break;
            }
        }

        loadJSON(function(response) {
            data = JSON.parse(response);
            document.getElementById("prediction").innerHTML = data[sign][predictDay];
        });
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', getFormData);  
}, false);