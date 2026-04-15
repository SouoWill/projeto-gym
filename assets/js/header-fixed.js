// HEADER FIXED

window.addEventListener('scroll', function(){
    let header = document.querySelector('.nav-main-header')
    header.classList.toggle('rolagem',window.scrollY > 500)
})