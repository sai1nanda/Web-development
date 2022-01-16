burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
log = document.querySelector('.log')
// burger = document.querySelector('.burger')


burger.addEventListener('click',()=>{
    log.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
