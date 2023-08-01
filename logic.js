

var randomVariable1 = Math.random();
randomVariable1 = randomVariable1 * 6;
randomVariable1= Math.floor(randomVariable1)+1;

var image1 = "./images/dice" + randomVariable1 + ".png";
document.querySelector(".img1").setAttribute("src",image1);

// second
var randomVariable2 = Math.random();
randomVariable2 = randomVariable2 * 6;
randomVariable2 = Math.floor(randomVariable2)+1;


var image2 = "./images/dice" + randomVariable2 + ".png";
document.querySelector(".img2").setAttribute("src",image2);

if(randomVariable1 == randomVariable2){
    document.querySelector("h1").textContent = "Draw";
    document.querySelector(".img3").setAttribute("src","./images/dreamCatcher.jpeg");
    
}
else if(randomVariable1 > randomVariable2){
    document.querySelector("h1").textContent = "Meenal wins";
    document.querySelector(".img3").setAttribute("src","./images/loveimg.jpg");
}
else if(randomVariable1 < randomVariable2){
    document.querySelector("h1").textContent = "Ashutosh wins";
    document.querySelector(".img3").setAttribute("src","./images/loveimg.jpg");
}
