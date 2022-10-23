/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
	const header = document.getElementById('header')
	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}


/*=============== SERVICES MODAL ===============*/
const modalViews= document.querySelectorAll('.about__modal'),
	 modalBtns= document.querySelectorAll('.about__button'),
	 modalClose= document.querySelectorAll('.about__modal-close')
	
	 let modal = function(modalClick){
		modalViews[modalClick].classList.add('active-modal')
	 }

	 modalBtns.forEach((mb, i) =>{
		mb.addEventListener('click', () =>{
			modal(i)
		})
	 })

	 modalClose.forEach((mc)=>{
		mc.addEventListener('click', ()=>{
			modalViews.forEach((mv)=>{
				mv.classList.remove('active-modal')
			})
		})
	 })


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer = mixitup('.work__container', {
	selectors:{
		target: '.work__card'
	},
	animation:{
		duration: 300
	}
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
	linkWork.forEach(l=> l.classList.remove('active-work'))
	this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click', activeWork))


/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonial__container", {
	spaceBetween:24,
	loop:true,
	grabCursor:true,
	pagination:{
		el:".swiper-pagination",
		clickable:true,
	}
});

let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'ligth-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin:'top',
	distance:'60px',
	duration2500,
	delay:400
})
sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 700})
sr.reveal('.home__social, .home__scroll', {delay:900, origin:'bottom'})

