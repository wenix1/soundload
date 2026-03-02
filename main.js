// Start Screen
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const serviceSelect = document.getElementById("serviceSelect");
const scCard = document.getElementById("scCard");
const spotifyCard = document.getElementById("spotifyCard");
const scFeatures = document.getElementById("scFeatures");
const spotifyFeatures = document.getElementById("spotifyFeatures");
const backToServices1 = document.getElementById("backToServices1");
const backToServices2 = document.getElementById("backToServices2");

// Theme switcher
document.querySelectorAll(".theme-switcher button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.body.classList.remove("theme-orange","theme-purple","theme-white","theme-green");
    document.body.classList.add("theme-"+btn.dataset.theme);
  });
});

// Start button
startBtn.addEventListener("click",()=>{
  startScreen.classList.add("hidden");
  serviceSelect.classList.remove("hidden");
});

// Select SC
scCard.addEventListener("click",()=>{
  serviceSelect.classList.add("hidden");
  scFeatures.classList.remove("hidden");
});

// Select Spotify
spotifyCard.addEventListener("click",()=>{
  serviceSelect.classList.add("hidden");
  spotifyFeatures.classList.remove("hidden");
});

// Back buttons
backToServices1.addEventListener("click",()=>{
  scFeatures.classList.add("hidden");
  serviceSelect.classList.remove("hidden");
});
backToServices2.addEventListener("click",()=>{
  spotifyFeatures.classList.add("hidden");
  serviceSelect.classList.remove("hidden");
});document.querySelectorAll(".theme-switcher button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.body.classList.remove("theme-orange","theme-purple","theme-white","theme-green");
    document.body.classList.add("theme-"+btn.dataset.theme);
  });
});document.querySelectorAll(".theme-switcher button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.body.classList.remove("theme-orange","theme-purple","theme-white","theme-green");
    document.body.classList.add("theme-"+btn.dataset.theme);
  });
});document.querySelectorAll(".theme-switcher button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.classList.remove("theme-orange","theme-purple","theme-white","theme-green");
    document.body.classList.add("theme-" + btn.dataset.theme);
  });
});