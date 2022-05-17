var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora sao exatamente ${hora}:${minutos}hs`)

if (hora < 12){
    console.log(`Bom dia`)
}else if(hora < 18){
    console.log(`Boa tarde`)
}else{
    console.log(`Espero que tenha aproveitado o seu dia! Boa Noite.`)
}