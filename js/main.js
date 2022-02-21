const toggleButton = document.getElementsByClassName('toggle-button')[0];
const closeMenu = document.getElementsByClassName('close')[0];
const navbarMenu = document.getElementsByClassName('navbar-links')[0];
const header =  document.getElementById('header');
const scrolldownbtn = document.getElementsByClassName('scroll-down-btn')[0];
header.style.height = window.innerHeight+"px";

window.addEventListener('resize',()=>{
	header.style.height = window.innerHeight+"px";
	//scrolldownbtn.style.top = (window.innerHeight * 0.5 )+"px" ;
});

toggleButton.addEventListener("click",()=>{
	navbarMenu.classList.toggle('active');
});
closeMenu.addEventListener("click",()=>{
	navbarMenu.classList.remove('active');
});



