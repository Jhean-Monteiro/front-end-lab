const titulo = document.querySelector('h1');
titulo.style.color = 'blue'

titulo.style.border = "solid green 3px"

titulo.style.borderRadius = '10px'

titulo.style.background = 'yellow'

titulo.style.borderRadius = '10px'

titulo.textContent = 'O escritório (Brasil)';

titulo.addEventListener('Click', ()=> {
 
   alert('Em breve no SBT')
})

titulo.addEventListener('mouseover', ()=> {
    titulo.style.color = 'red'
    titulo.style.backgroundColor = 'yellow';
})

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach(p =>{
    p.style.color = 'green'
})