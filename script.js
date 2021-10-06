function fotoSlide() {
    let foto = document.getElementById('foto')
    let sobreMim = document.getElementById('sobreMim')
    foto.style.animation = 'slide-left 1s both'
    foto.style.WebkitAnimation = 'slide-left 1s both' 
    foto.setAttribute("onclick", "javascript: fotoReSlide();")
    sobreMim.style.display = 'block'
    sobreMim.style.animation = 'slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both';
    sobreMim.style.WebkitAnimation = 'slide-in-blurred-left 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both';
}

function fotoReSlide() { 
    let foto = document.getElementById('foto')  
    let sobreMim = document.getElementById('sobreMim')
    foto.style.animation = 'slide-right 1s both'
    foto.style.WebkitAnimation ='slide-right 1s both'
    foto.setAttribute("onclick", "javascript: fotoSlide();")
    sobreMim.style.display = 'none'
    sobreMim.style.animation = 'fade-out 1s ease-out both';
    sobreMim.style.WebkitAnimation = 'fade-out 1s ease-out both'; 
}

function mostraLista() {
    let lista = document.querySelector('#listaJs')
    if(lista.style.display == '') {
        lista.style.display = 'block'
    } else {
        lista.style.display = ''
    }
}


