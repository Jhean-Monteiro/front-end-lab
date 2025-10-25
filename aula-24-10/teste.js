// Meu Tabuleiro - Exercício 2
// execute no site https://codepen.io/pen/

// Criar o container principal
const container = document.createElement('div');
container.style.cssText = `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

// Criar o título
const title = document.createElement('h1');
title.textContent = 'Meu Tabuleiro';
title.style.cssText = `
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #333;
  font-size: 24px;
`;

// Criar o tabuleiro (borda externa)
const board = document.createElement('div');
board.style.cssText = `
  width: 400px;
  height: 400px;
  border: 20px solid #8B4513;
  border-radius: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 0;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;

// Definir as cores das células (preto e branco, alternando)
const colors = ['#000000', '#FFFFFF'];
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const cell = document.createElement('div');
    const colorIndex = (row + col) % 2;
    cell.style.cssText = `
      background-color: ${colors[colorIndex]};
      border: none;
      margin: 0;
      padding: 0;
    `;
    board.appendChild(cell);
  }
}

// Adicionar ao container
container.appendChild(title);
container.appendChild(board);

// Adicionar ao body
document.body.appendChild(container);