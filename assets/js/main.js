/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".popular__container", {

    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },

         //Responsive breakpoints

    breakpoints: {
        // when windows width is >= 600
        600: {
            slidesPerView: 2
        },
    
        // when windows width is >= 1024
        1024: {
            slidesPerView: 3
        },
    }
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem !== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value__accordion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
    }

    
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]') /*Selecionar todas as section com id*/

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('activate-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('activate-link')
            }
    })
}

window.addEventListener('scroll', scrollActive)



/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //Quando o scroll for maior que 350 no viewport, adicionar a class do CSS
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true para quando o usuario retornar a sessão exibir a animação novamente
})

sr.reveal(`.home__title, .popular__container, .appointment-container, .footer__container`)
sr.reveal(`.home__description, .footer__info`, {delay:500})
sr.reveal(`.home__search`, {delay:600})
sr.reveal(`.home__value`, {delay:700})
sr.reveal(`.home__images`, {delay:800, origin:'bottom'})
sr.reveal(`.logos__img`, {interval:100})
sr.reveal(`.value__images, .contact__content`, {origin:'left'})
sr.reveal(`.value__content, .contact__images`, {origin:'right'})