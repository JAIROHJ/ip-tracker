const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector('.ip-display');
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const loading = document.querySelector(".loading-container");
const details = document.querySelector(".details");

lookupBtn.addEventListener('click',()=>{
    loading.style.display = "flex";
    details.style.display = "none";
    axios.get("https://ipapi.co/json/").then((response)=>{
        loading.style.display = "none";
        details.style.display = "flex";
        ipDisplay.textContent = `Ip: ${response.data.ip}`;
        locationDisplay.textContent = `Location: ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;
        geoDisplay.textContent = `Geo Location: ${response.data.latitude}, ${response.data.longitude}`;
    })
})