
/*Functions for front-page slideshow.*/

const slideshow = document.querySelector(".slideshow");
const slides = slideshow.querySelectorAll(".slideshow__slide");
const controls = slideshow.querySelectorAll(".slideshow__control-button");


let index = 6;
const totalSlides = slides.length;
const lastIndex = slides.length - 1;



const goToPreviousSlide = () => {
	if(index === 0){
		index = lastIndex;
	}else{
		index = index - 1;
	}

	slides.forEach(slide=>{
		slide.classList.remove("slideshow__slide--visible");
	 });
	slides[index].classList.add("slideshow__slide--visible");
};

const goToNextSlide = () => {
	if (index < lastIndex) {
		index = index + 1;
	}else{
		index = 0;
	}
	

	slides.forEach(slide=>{
		slide.classList.remove("slideshow__slide--visible");
	 });
	slides[index].classList.add("slideshow__slide--visible");
};

/*By clicking button assigned to const controls (".slideshow__control-button"),
the slideshow will change slide. Dependent on whether button assigned to previous or
next slide is clicked.*/ 

const changeSlide = (event) =>{
	const button = event.currentTarget;

	if (button.dataset.direction === "previous"){
		goToPreviousSlide();
	}

	if (button.dataset.direction === "next"){
		goToNextSlide();
	}
}
 

controls.forEach(button =>{
	button.addEventListener("click", changeSlide);
})

/*Function assigned left and right arrowkeys. 
Right arrowkey brings next slide,
Left arrowkey brings previous slide*/

document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowLeft"){
		goToPreviousSlide();
	}else if (event.key === "ArrowRight"){
		goToNextSlide();
	}
});



/*Function assigned to buttons within "main-container". 
Function redirects user to a new webpage in a new tab.
A seperate webpage is assigned each button. 
In total four different webpages to explore.*/

const newWebpageRegistration = document.querySelector(".new-website__registration");
newWebpageRegistration.addEventListener("click", ()=>{
	window.open(
		"registration-page.html",
		"RegistrationMelhusMarathon2024",
		
	);
});


const newWebpageContact = document.querySelector(".new-website__contact");
newWebpageContact.addEventListener("click", ()=>{
	window.open(
		"contact-page.html",
		"ContactMelhusMarathon2024",
		
	);
});


const newWebpageInformation = document.querySelector(".new-website__information");
newWebpageInformation.addEventListener("click", ()=>{
	window.open(
		"information-page.html",
		"InformationMelhusMarathon2024",
		
	);
});

const newWebpageInspiration = document.querySelector(".new-website__inspiration");
newWebpageInspiration.addEventListener("click", ()=>{
	window.open(
		"inspiration-page.html",
		"InspirationMelhusMarathon2024",
	);
});

