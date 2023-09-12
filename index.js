
// numero1 = Number(prompt('Diga um número'))
// numero2 = Number(prompt('Diga outro número'))

// if (numero1 === numero2){
//     console.log('Sucesso')
// } else{
//     console.log('n deu')
// }

// function comparacao(num1,num2){
//     if (num1 === num2){
//         return 'são iguais'
//     }else{
//         return 'são diferentes'
//     }
// }

// console.log(comparacao(prompt('Diga um número'),prompt('Diga outro número')))

// let condicao1 = false
// let condicao2 = true

// if (condicao1){
//     console.log('entrei no if 1')
// } else {
//     if (condicao2){
//         console.log('entrei na condicao 2')
//     }
// }


//usando elif 

// let condicao1 = false
// let condicao2 = true

// if (condicao1){
//     console.log('entrei no if 1')
// } else if (condicao2){
//         console.log('entrei na condicao 2')
     
// }


// function comparacaoo(num1,num2){
//     if (num1 > num2){
//         console.log('O primeiro número é maior que o segundo')
//     } else if (num1 < num2){
//         console.log('O primeiro número é menor que o segundo')
//     } else if (num1 === num2){
//         console.log('os números são iguais')
//     }
    
// }

// comparacaoo(Number(prompt('Diga um número')),Number(prompt('Diga outro número')))


//pra nao usar um milhao de if e else

// let paisDeOrigem
// switch (paisDeOrigem) {
//     case 'Brasil':
//         console.log('brasileiro')
//         break;
//     case 'EUA':
//         console.log('estadunidense')
//         break;
//     case 'canadá':
//         console.log('canadense')
//         break;    
    
//     default:
//         console.log('nacionalidade não encontrada')
//         break;
// }


let pokemon = prompt('Escolha seu pokemon inicial da 1a geração')
pokemon = pokemon.toLowerCase().toString()
switch (pokemon){
    case 'Charmander'.toLowerCase():
        console.log('Tipo Fogo')
        break;
    case 'Bulbassauro'.toLowerCase():
        console.log('Tipo Planta e Veneno')
        break;
    case 'Squirtle'.toLowerCase():
        console.log('Tipo água')
        break;
    default:
        console.log('pokemon inválido (Escolha Charmander, Bulbassauro ou Squirtle)')
        break;
}


