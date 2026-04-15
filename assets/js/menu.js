// ABRI E FECHAR MENU

const menuDiv = document.getElementById('itens')
const menuAnimar = document.getElementById('burguer')

menuDiv.addEventListener('click', clickMenu)
function clickMenu(){
    menuDiv.classList.toggle('abrir-menu')
    menuAnimar.classList.toggle('ativo')
    const btn = document.getElementById('burguer')
    btn.classList.toggle('animacao-menu')
}

