let i = 0;

function fotoSlide() {
   
    let foto = document.getElementById('foto')
    foto.style.animation = 'slide-left 0.5s both'
    foto.style.WebkitAnimation = 'slide-left 0.5s both' 
    foto.setAttribute("onclick", "javascript: fotoReSlide();")
    document.getElementById('sobreMim').display = 'inline-block'
}

function fotoReSlide() {
    
    let foto = document.getElementById('foto')  
    foto.style.animation = 'slide-right 0.5s both'
    foto.style.WebkitAnimation ='slide-right 0.5s both'
    foto.setAttribute("onclick", "javascript: fotoSlide();")
    document.getElementById('sobreMim').display = 'none'
}
