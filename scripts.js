// ABRI E FECHAR

const menuDiv = document.getElementById('itens')
const menuAnimar = document.getElementById('burguer')

menuDiv.addEventListener('click', clickMenu)
function clickMenu(){
    menuDiv.classList.toggle('abrir-menu')
    menuAnimar.classList.toggle('ativo')
    const btn = document.getElementById('burguer')
    btn.classList.toggle('animacao-menu')
}

// HEADER FIXED

window.addEventListener('scroll', function(){
    let header = document.querySelector('.nav-main-header')
    header.classList.toggle('rolagem',window.scrollY > 500)
})

