let ano = parseInt(prompt('Insira o ano: '))
if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)) {
    alert(`o ano ${ano} é bissexto!`)
} else {
    alert(`O ano ${ano} não é bissexto!`)
}


for (let i = 1; i <= 10; i ++) {
    console.log(i);
}

c = 0
while (c <= 10) {
    c++;
    console.log(c);
}


while (true) {
    let numero = parseInt(prompt('um numero: '))
    if (numero < 10) {
        alert('numero prqueno')
        break
    } else {
        alert('sei lá')
        break
    }
}

count = 1
while (true) {
    console.log(count)
    count ++;
    if (count >= 10) {
        break
    }
}

while (true){
    let senha = prompt('Insira a senha: ')
    if (senha === "admin123") {
        console.log('Acertou fdp');
        break
    } else {
        console.log('errado');
    }
}

let senha = prompt('Insira sua senha: ')
while (senha !== 'admin123') {
    senha = prompt('Insira sua senha: ')
}
alert('Senha certa!')

function olaMundo() {
    alert('olá mundo');
    alert('olá pessoal');
};

olaMundo();



// crie uma function que o usuario insere nota de p1 e p2
// retorna com aprovação ou reprovação (if  < 7)


function mediaFinal(nota1, nota2) {
    let media = ((nota1 + nota2) / 2)
    console.log("sua media: ", media)
    if (media >= 7) {
        console.log("aprovado fi");
    } else {
        console.log("reprovado!");
    }

}

let nota1 = parseInt(prompt("insira a nota 1: "))
let nota2 = parseInt(prompt("insira a nota 2: "))
mediaFinal(nota1, nota2)



function mediaNotas(p1,p2) {
    let media = (p1 + p2)/2;
    if (media >= 7) {return alert(`O aluno tirou ${media} e está aprovado!`)} else {return alert(`O aluno tirou ${media} e está reprovado. seu LIXO`)}
}

mediaNotas(10,0)

function mediaProva(p1,p2) {
    let media = (p1 + p2)/2;
    if (media >= 7) {
        return alert(`foi aprovado com {media}`)
    }
}



let lista = [1,2,3,4,5,6]
console.log(lista)