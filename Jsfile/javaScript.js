window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if (window.pageYOffset > 0) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

// sub banner
var subBanner = document.querySelector(".sub-banner");
subBanner.style.textAlign = "center";
subBanner.style.fontSize = "larger";
// Create an array of cake image URLs
var cakeImages = ["pic/cake1.png", "pic/cake2.png", "pic/cake3.png"];
var names = ["Nice", "Harsh", "Cute"];

// Create a container element to hold the cake images
var cakeContainer = document.createElement("div");
cakeContainer.classList.add("cake-container");
cakeContainer.style.display = "flex";
cakeContainer.style.justifyContent = "center";
cakeContainer.style.alignItems = "center";

// Loop through the cake images array and create image elements
for (var i = 0; i < cakeImages.length; i++) {
  var cakeImage = document.createElement("img");
  cakeImage.src = cakeImages[i];
  cakeImage.classList.add("cake-image");
  cakeImage.style.width = "350px";
  cakeImage.style.height = "300px";
  cakeImage.style.margin = "50px"; // Add margin to create distance between images
  cakeImage.style.borderRadius = "10px"; // Add border radius for rounded corners
  cakeContainer.appendChild(cakeImage);
}

// Append the cake container to the document body
document.body.appendChild(cakeContainer);
