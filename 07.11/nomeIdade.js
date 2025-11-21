// crie uma function que terá nome e idade. a saída deverá ter
// nome: fulano - Idade: 30

// function nomeIdade() {
//     let nome = prompt('Insira seu nome: ')
//     let idade = parseInt(prompt('Insira sua idade: '))

//     alert(`Nome: ${nome}, Idade: ${idade} `)

// }

// nomeIdade()

function nomeIdade(nome, idade) {
    alert(`Nome: ${nome}, Idade: ${idade} `)
}


while (true) {
    let nome = prompt('Insira seu nome: ')
    let idade = parseInt(prompt('Insira sua idade: '))
    nomeIdade(nome, idade)
}
