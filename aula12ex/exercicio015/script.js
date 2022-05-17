function vefificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.getElementById('resultado')

    if(formano.value.length == 0 || Number(formano.value) > ano){
        alert("Verifique os dados e tente novamente!")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Crianca
                img.setAttribute("src", "bebe-homem")
            }else if(idade < 21){
                //Jovem
                img.setAttribute("src", "jovem-homem")
            }else if(idade < 50){
                //Adulto
                img.setAttribute("src", "adulto-homem")
            }else{
                //Idoso
                img.setAttribute("src", "idoso-homem")
            }
        }else{
            genero = "mulher"
            if (idade >=0 && idade < 10){
                //Crianca
                img.setAttribute("src", "bebe-mulher")
            }else if(idade < 21){
                //Jovem
                img.setAttribute("src", "jovem-mulher")
            }else if(idade < 50){
                //Adulto
                img.setAttribute("src", "adulto-mulher")
            }else{
                //Idoso
                img.setAttribute("src", "idoso-mulher")
            }
        }
        resultado.style.textAlign = "center"
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }

}