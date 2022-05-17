var idade = 40
console.log(`Voce tem ${idade} anos de idade.`)

if(idade < 16){
    console.log(`Infelizmente voce ainda nao pode votar`)
}else if(idade < 18 || idade >= 65){
        console.log(`O seu voto é opcional`)
}else{
    console.log(`Voce é obrigado a votar no Brasil`)
}
