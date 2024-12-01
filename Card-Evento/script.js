// Função para carregar o evento da página de detalhes
function loadEventDetails() {
    const savedEvent = localStorage.getItem('selectedEvent');
    if (savedEvent) {
        const event = JSON.parse(savedEvent);
        
        // Exibir as informações do evento
        document.getElementById('event-title').textContent = event.titulo;
        document.getElementById('event-description').textContent = event.descricao;
        document.getElementById('event-date').textContent = new Date(event.data_evento).toLocaleDateString();
        document.getElementById('event-location').textContent = event.local;
    } else {
        console.log('Nenhum evento encontrado.');
    }
}

// Chamar a função ao carregar a página
window.onload = loadEventDetails;
