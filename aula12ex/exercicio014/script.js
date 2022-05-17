function carregar(){
    const msg = document.getElementById("mensagem");
    const foto = document.getElementById("imagem");
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Time now in your location is ${hora}:${minutos}`

    if (hora >= 0 && hora < 12){
        foto.src = "manha.png"
        document.body.style.background = "#c28356"
    }else if (hora >=12 && hora <= 18){
        foto.src = "tarde.png"
        document.body.style.background = "#9c3401"
    }else{
        foto.src = "noite.png"
        document.body.style.background = "#151924"
    }
}