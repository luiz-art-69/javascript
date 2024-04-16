// Criando a matriz em JavaScript
const matriz = [
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10']
  ];

  // Função para gerar a grade no HTML e adicionar eventos de clique
  function renderGrid() {
    const gridContainer = document.getElementById('grid');

    matriz.forEach((row, rowIndex) => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('grid-container');

      row.forEach((col, colIndex) => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('grid-item');
        colDiv.textContent = col;
        colDiv.addEventListener('click', () => cellClicked(rowIndex, colIndex)); // Adicionando evento de clique
        rowDiv.appendChild(colDiv);
      });

      gridContainer.appendChild(rowDiv);
    });
  }

   // Função chamada quando uma célula é clicada
   function cellClicked(row, col) {
    const clickedCell = matriz[row][col];
    if (!clickedCell.includes('RESERVADA')) {
      console.log(`Cadeira ${clickedCell} RESERVADA!`);
      matriz[row][col] += ' RESERVADA'; // Adiciona "RESERVADA" ao valor da célula para indicar que está reservada
      
      // Seleciona a célula clicada
      const selectedCell = document.querySelector(`.grid-item[data-row="${row}"][data-col="${col}"]`);
      if (selectedCell) {
        selectedCell.classList.add('selected'); // Adiciona a classe 'selected' para mudar a cor
        selectedCell.removeEventListener('click', () => cellClicked(row, col)); // Remove o event listener para impedir mais reservas
      }
    } else {
      console.log(`Cadeira ${clickedCell} já está RESERVADA.`);
    }
  }

  // Inicialização
  renderGrid();