// script.js

// Seleciona todos os botões de filtro
const filterButtons = document.querySelectorAll('.filter-btn');

// Adiciona um evento de clique a cada botão de filtro
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Exibe um alerta com o nome do filtro (substituir por lógica real de filtro)
    alert('Filtro aplicado: ' + button.innerText);

    // Aqui você pode adicionar uma lógica para exibir ou ocultar eventos
    // com base no filtro selecionado. Exemplo:
    // if (button.innerText === 'Popular') {
    //   // Mostre eventos populares
    // }
  });
});
