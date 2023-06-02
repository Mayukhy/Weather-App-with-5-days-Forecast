const settings = {
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "33d0e9ff7emshdfc6a8600eb2c8cp161467jsn7f54013e663c",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
	}
};  
  const cityname1 = document.getElementById("cityname1");
  const cityname = document.getElementById("cityname");
  const cityname2= document.getElementById("cityname2");
  const getweather = (city) =>{
   cityname1.innerHTML= city;
   cityname2.innerHTML= city;
   // The api key from "Rapid Api" platfrom
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= '+ city,settings)
.then(response => response.json()) //to execute the promise from the weather api
.then((response) => {
	console.log(response);
    const humidity = document.getElementById("humidity");
    const temp = document.getElementById("temp");
    //taking & printing the values are collected from the api
    temp.value = response.temp;
    temp.innerHTML = response.temp;
    humidity.value = response.humidity;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML =response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;

   // Changing of animated image as weather condition
   const IMG1 = document.getElementById("img1");
   var imgarr1 = ["animation_300_lg52s3ys.gif","animation_300_lg523nyn.gif"];
   if(temp.value >= "29"){
   IMG1.src = imgarr1[0];
   IMG1.classList.add("img2");
   }
   else if (temp.value < "29"){
    IMG1.src = imgarr1[1];
    IMG1.classList.add("img2");
   }
   else{
    IMG1.src ;
   }
   var imgarr2 = ["rain.gif","cloud.gif"];
   const IMG2 = document.getElementById("img2");
   if(humidity.value >= "65"){
    IMG2.src = imgarr2[0]
   }
   else if( humidity.value < "65"){
      IMG2.src = imgarr2[1] 
   }
   // Changing animated background as weather condition
   const animation = document.getElementById("animation")
   var Animation = ["https://embed.lottiefiles.com/animation/63451","https://embed.lottiefiles.com/animation/12055"]
   if(temp.value >= "29"){
      animation.src = Animation[0];
      document.body.style.backgroundColor ="#ECE6BB";
      }
      else if (temp.value < "29"){
       animation.src = Animation[1];
       animation.classList.add("background");
       document.body.style.backgroundColor = "black";
      }
      else{
       animation.src ;
      }
});
   
}
   const submit = document.getElementById("submit");   //for Search btn
   submit.addEventListener("click", (e) =>{
    e.preventDefault();
    if (cityname.value ==""){
      alert("Enter a Valid City Name")
    }
   getweather(cityname.value);
   
   })
  
    