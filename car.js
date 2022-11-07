//changing the color of car and addToCart button color when a color is selected
//selecting elements
const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedbackBtn =document.querySelector(".feedback");


// Adding Events Listeners
//Red color
redColor.addEventListener("click",function(){
 cartButton.style.backgroundColor = "red";
 itemTag.style.backgroundColor = "red";
 imageCard.style.backgroundImage = 'url("red-removebg-preview.png")';
});
//gray color
grayColor[0].addEventListener("click",function(){
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor ="gray";
    imageCard.style.backgroundImage = 'url("mercedes-benz-e-class_20-removebg-preview.png")';
});
//black color
blackColor.addEventListener("click",function(){
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor ="black";
    imageCard.style.backgroundImage = 'url("blackbenz-removebg-preview.png")';
});

//Button Click implementation
//cart Button
const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click",cart);

//feedback
const feedback = () =>{
    cartButton.style.display ="block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click",feedback);
