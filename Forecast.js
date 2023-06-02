
const cityinput = document.getElementById("cityinput");
const CityName =  document.getElementById("CityName");
const Search   =  document.getElementById("Search");

//Main logic for 5 days weather forecasting
function forecust(){
   CityName.innerHTML =  " for : " +cityinput.value;
   
   // The api key from "open weather" platfrom
   fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityinput.value+'&appid=7b59e388193a402892ff90ae0095eeb5')
   .then(response => response.json())   //to execute the promise from the weather api
   .then(response => {
     //Take the value of min temperature
     document.getElementById("min_temp1").value = Math.round(response.list[0].main.temp_min - 273.15);
     document.getElementById("min_temp2").value = Math.round(response.list[1].main.temp_min - 273.15);
     document.getElementById("min_temp3").value = Math.round(response.list[2].main.temp_min - 273.15);
     document.getElementById("min_temp4").value = Math.round(response.list[3].main.temp_min - 273.15);
     document.getElementById("min_temp5").value = Math.round(response.list[4].main.temp_min - 273.15);
     //Print the value of min temperature
     document.getElementById("min_temp1").innerHTML = Math.round(response.list[0].main.temp_min - 273.15);
     document.getElementById("min_temp2").innerHTML = Math.round(response.list[1].main.temp_min - 273.15);
     document.getElementById("min_temp3").innerHTML = Math.round(response.list[2].main.temp_min - 273.15);
     document.getElementById("min_temp4").innerHTML = Math.round(response.list[3].main.temp_min - 273.15);
     document.getElementById("min_temp5").innerHTML = Math.round(response.list[4].main.temp_min - 273.15);
      //Print the value of max temperature
     document.getElementById("max_temp1").innerHTML = Math.round(response.list[0].main.temp_max - 273.15);
     document.getElementById("max_temp2").innerHTML = Math.round(response.list[1].main.temp_max - 273.15);
     document.getElementById("max_temp3").innerHTML = Math.round(response.list[2].main.temp_max - 273.15);
     document.getElementById("max_temp4").innerHTML = Math.round(response.list[3].main.temp_max - 273.15);
     document.getElementById("max_temp5").innerHTML = Math.round(response.list[4].main.temp_max - 273.15);
      //Take value of humidity
     document.getElementById("humidity1").value = Math.round(response.list[0].main.humidity);
     document.getElementById("humidity2").value = Math.round(response.list[1].main.humidity);
     document.getElementById("humidity3").value = Math.round(response.list[2].main.humidity);
     document.getElementById("humidity4").value = Math.round(response.list[3].main.humidity);
     document.getElementById("humidity5").value = Math.round(response.list[4].main.humidity);
     //Print the value of humidity
     document.getElementById("humidity1").innerHTML = Math.round(response.list[0].main.humidity);
     document.getElementById("humidity2").innerHTML = Math.round(response.list[1].main.humidity);
     document.getElementById("humidity3").innerHTML = Math.round(response.list[2].main.humidity);
     document.getElementById("humidity4").innerHTML = Math.round(response.list[3].main.humidity);
     document.getElementById("humidity5").innerHTML = Math.round(response.list[4].main.humidity);
})
}
    const Anima = document.getElementById("Anima");    //for the Show Animation btn
    Anima.addEventListener("click", (e) => {
    e.preventDefault;
    Anima.innerHTML= "Show Animation";
    if (cityinput.value ==""){
    alert("Enter a City Name First")

   }
   else{
   imgchanging();
   Anima.innerHTML= "Shown";
   }
    })
    
    
Search.addEventListener("click",(e) =>{   // For Search btn
   e.preventDefault();
   if (cityinput.value ==""){
     alert("Enter a Valid City Name")
   }
   else{
   Anima.innerHTML= "Show Animation";
   forecust();
   }
})

var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Fryday","Saturday"];
const d = new Date();   //new date object is created
//  finding the current day
function CheckDay(DAY){
if(DAY +d.getDay() > 6){
return DAY +d.getDay()-7
}
else{
   return DAY +d.getDay()
}
}
// Print Each Day in the Website
document.getElementById("day1").innerHTML = weekday[CheckDay(0)];
document.getElementById("day2").innerHTML = weekday[CheckDay(1)];
document.getElementById("day3").innerHTML = weekday[CheckDay(2)];
document.getElementById("day4").innerHTML = weekday[CheckDay(3)];
document.getElementById("day5").innerHTML = weekday[CheckDay(4)];

//finding the current date
const date = new Date();
function CheckDate(){
 console.log(date.getDate())
}
CheckDate();

// Image Changing
function imgchanging(){
var Imgarr3 = ["rainbowgif.gif","sungif.gif", "raingif.gif","https://media2.giphy.com/media/ih48CY1Ssvk0z5rH8N/giphy.gif?cid=ecf05e47bai5rv2fj3lzu9lwtugs23z3nk1fnkny7yqrp6xe&rid=giphy.gif&ct=g","RainThunder.gif"];
if( document.getElementById("min_temp1").value <= "29" &&  document.getElementById("humidity1").value < "65"  && document.getElementById("humidity1").value >= "50" ){
document.getElementById("img1").src = Imgarr3[0]; //rainbowpic
}
else if( document.getElementById("min_temp1").value > "29" && document.getElementById("humidity1").value < "50"){
document.getElementById("img1").src = Imgarr3[1]; //sunpic
}
else if( document.getElementById("min_temp1").value < "29" && document.getElementById("humidity1").value >= "65" && document.getElementById("humidity1").value <"80"){
document.getElementById("img1").src = Imgarr3[2]; //rainpic
}
else if( document.getElementById("min_temp1").value < "29" && document.getElementById("humidity1").value >= "80"){
document.getElementById("img1").src = Imgarr3[4]; //ThunderRainpic
}
else{
 document.getElementById("img1").src = Imgarr3[3]; 
}


if( document.getElementById("min_temp2").value <= "29" &&  document.getElementById("humidity2").value < "65" && document.getElementById("humidity2").value >= "50" ){
document.getElementById("img2").src = Imgarr3[0]; //rainbowpic
}
else if( document.getElementById("min_temp2").value > "29" && document.getElementById("humidity2").value < "50"){
document.getElementById("img2").src = Imgarr3[1]; //sunpic
}
else if( document.getElementById("min_temp2").value < "29" && document.getElementById("humidity2").value >= "65" && document.getElementById("humidity2").value <"80"){
document.getElementById("img2").src = Imgarr3[2]; //rainpic
}
else if( document.getElementById("min_temp2").value < "29" && document.getElementById("humidity2").value >= "80"){
document.getElementById("img2").src = Imgarr3[4]; //ThunderRainpic
}
else{
 document.getElementById("img2").src = Imgarr3[3]; 
}


if( document.getElementById("min_temp3").value <= "29" &&  document.getElementById("humidity3").value < "65" && document.getElementById("humidity3").value >= "50" ){
document.getElementById("img3").src = Imgarr3[0]; //rainbowpic
}
else if( document.getElementById("min_temp3").value > "29" && document.getElementById("humidity3").value < "50"){
document.getElementById("img3").src = Imgarr3[1]; //sunpic
}
else if( document.getElementById("min_temp3").value < "29" && document.getElementById("humidity3").value >= "65" && document.getElementById("humidity3").value <"80"){
document.getElementById("img3").src = Imgarr3[2]; //rainpic
}
else if( document.getElementById("min_temp3").value < "29" && document.getElementById("humidity3").value >= "80"){
document.getElementById("img3").src = Imgarr3[4]; //rainthunder
}
else{
 document.getElementById("img3").src = Imgarr3[3]; 
}


if( document.getElementById("min_temp4").value <= "29" &&  document.getElementById("humidity4").value < "65" && document.getElementById("humidity4").value >= "50" ){
document.getElementById("img4").src = Imgarr3[0]; //rainbowpic
}
else if( document.getElementById("min_temp4").value > "29" && document.getElementById("humidity4").value < "50"){
document.getElementById("img4").src = Imgarr3[1]; //sunpic
}
else if( document.getElementById("min_temp4").value < "29" && document.getElementById("humidity4").value >= "65" && document.getElementById("humidity4").value <"80"){
document.getElementById("img4").src = Imgarr3[2]; //rainpic
}
else if( document.getElementById("min_temp4").value < "29" && document.getElementById("humidity4").value >= "80"){
document.getElementById("img4").src = Imgarr3[4]; //ThunderRainpic
}
else{
 document.getElementById("img4").src = Imgarr3[3]; 
}


if( document.getElementById("min_temp5").value <= "29" &&  document.getElementById("humidity5").value < "70" && document.getElementById("humidity5").value >= "50" ){
document.getElementById("img5").src = Imgarr3[0]; //rainbowpic
}
else if( document.getElementById("min_temp5").value > "29" && document.getElementById("humidity5").value < "50"){
document.getElementById("img5").src = Imgarr3[1]; //sunpic
}
else if( document.getElementById("min_temp5").value < "29" && document.getElementById("humidity5").value >= "65" && document.getElementById("humidity5").value <"80"){
document.getElementById("img5").src = Imgarr3[2]; //rainpic
}
else if( document.getElementById("min_temp5").value < "29" && document.getElementById("humidity5").value >= "80"){
document.getElementById("img5").src = Imgarr3[4]; //ThunderRainpic
}
else{
 document.getElementById("img5").src = Imgarr3[3]; 
}
} 