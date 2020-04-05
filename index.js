// Final project due - April 9th; will be presented on April 7th;
//  - create an individual website about you; you should think of it as your portfolio;
//   - the website should have: About me section, section where someone can see your projects/github repo links; contact me section; feel free to add anything else you would like to;
//   - the website should have a modal - a div that appears a sec or two after you launch the page; this modal can appear on any of the pages (could be your contact info for example);
//   - the website should have a image carousel where you can press buttons and go left or right and see different photos;	



let leftButton = document.getElementById("leftButton")
let rightButton = document.getElementById("rightButton")
let images = document.getElementsByClassName("sliderPhotoContainer")
let index = 0;
images[index].style.display = "block";

leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);

function moveLeft(){
	index = index - 1;
	images [index +1].style.display = "none"

	if (index < 0){
		index = images.length - 1;
	}
	images[index].style.display = "block";
}

function moveRight() {
	index = index + 1;
	images [index - 1].style.display = "none";

	if (index > images.length - 1){
		index = 0;
	}
	images [index].style.display = "block";

}
