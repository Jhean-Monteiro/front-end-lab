console.log('Ola Mundo');

let titulo = document.querySelector('h1')
let botao = document.querySelector('#btn')

titulo.style.color = 'black'

botao.style.color = 'red'

// altere tbm o texto pra ingles e depois retorne
botao.addEventListener('click', () => {
    if (titulo.style.color === 'black') {
        titulo.style.color = 'red';
    } else {
        titulo.style.color = 'black'
    }
})

botao.addEventListener('click', () => {
    if (titulo.textContent === 'Ola Mundo')  {
        titulo.textContent = 'O texto foi alterado!';
    } else {
        titulo.textContent = 'Ola Mundo'
    }
})

