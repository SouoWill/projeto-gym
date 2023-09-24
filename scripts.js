function mudouTamanho() {
    if (window.innerWidth >= 992) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

/* HEADER FIXED */ 

window.addEventListener('scroll', function(){
    let header = document.querySelector('.nav-main-header')
    header.classList.toggle('rolagem',window.scrollY > 500)
})