var cityname;
function getCurrentTemperature()
{
    cityname = document.getElementById('city').value;
    console.log(cityname);
    $.ajax({
        url: `http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22`,
        success: function(result){
            console.log(result);
        }});
}
function getForecast()
{
    cityname = document.getElementById('city').value;
    console.log(cityname);
    
    
}