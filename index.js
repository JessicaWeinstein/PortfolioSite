// Final project due - April 9th; will be presented on April 7th;
//  - create an individual website about you; you should think of it as your portfolio;
//   - the website should have: About me section, section where someone can see your projects/github repo links; contact me section; feel free to add anything else you would like to;
//   - the website should have a modal - a div that appears a sec or two after you launch the page; this modal can appear on any of the pages (could be your contact info for example);
//   - the website should have a image carousel where you can press buttons and go left or right and see different photos;	




// let images = [
//  "photos/home/sliderImg1.jpg", "photos/home/sliderImg4.jpg", "photos/home/sliderImg2.jpg", 
//  "photos/home/sliderImg8.jpg", "photos/home/sliderImg6.jpg"
//  ]

//  let left = document.getElementById("left")
// let right = document.getElementById("right")
// let box = document.getElementById("homePageSlider")
// let index = 0;


let colors= ["photos/home/sliderImg1.jpg", "blue", "green", "yellow", "black", "purple", "pink"]

let left = document.getElementById("left")
let right = document.getElementById("right")
let carousel = document.getElementById("carousel")
let index = 0;

left.addEventListener("click", moveLeft)
right.addEventListener("click", moveRight)

function assignColors(){
	carousel.style.background = colors [index +2]
}
function moveLeft(){
	index = index - 1;
	if (index < 0){
		index = colors.length-1;
	}
	carousel.style.background = colors[index]	
}

function moveRight() {
	index = index + 1;
	if (index > colors.length-1){
		index = 0;
	}
	carousel.style.background = colors[index]

}

window.onload = assignColors()