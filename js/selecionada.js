const teclas = document.querySelectorAll(".oitava > div")
  
function desmarcar(teclas) {
    teclas.classList.remove("selecionada")
    
}

teclas.forEach(function(teclas) {
    teclas.onmousedown = function() {
        teclas.classList.add("selecionada")
    }
   
    teclas.onmouseup = () => desmarcar(teclas)
    teclas.onmouseleave = () => desmarcar(teclas)

})