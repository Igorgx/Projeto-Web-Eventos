// Função para buscar eventos e exibir os cards
async function fetchEvents() {
    try {
        const response = await fetch('http://localhost:3000/api/events'); // Endpoint do backend
        const events = await response.json();

        if (events.length === 0) {
            document.getElementById('event-cards-container').innerHTML = '<p>Nenhum evento encontrado.</p>';
            return;
        }

        // Guardar eventos na memória para filtro
        window.allEvents = events;

        // Exibir todos os eventos por padrão
        displayEvents(events);
    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
    }
}

// Função para exibir eventos com base na nova modelagem
function displayEvents(events) {
    const container = document.getElementById('event-cards-container');
    container.innerHTML = ''; // Limpar conteúdo anterior

    events.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Adicionar as tags ao evento
        const tags = event.tags ? event.tags.split(',').map(tag => `<span class="badge badge-info">${tag}</span>`).join(' ') : '';

        card.innerHTML = `
            <a href="../Card-Evento/index.html" style="text-decoration: none; color: inherit;" onclick="saveEventToLocalStorage(${event.id})">
                <h3>${event.titulo}</h3> <!-- Nome do Evento -->
                <p class="event-date">${new Date(event.hora_evento).toLocaleDateString()} ${new Date(event.hora_evento).toLocaleTimeString()}</p> <!-- Data e Hora -->
                <p><strong>Local:</strong> ${event.cidade}, ${event.estado}</p> <!-- Local -->
            </a>
        `;
        container.appendChild(card);
    });
}

// Função para salvar o evento no localStorage
function saveEventToLocalStorage(eventId) {
    const event = window.allEvents.find(event => event.id === eventId);
    if (event) {
        // Salvar o evento no localStorage
        localStorage.setItem('selectedEvent', JSON.stringify(event));
    }
}

// Função para filtrar eventos
function filterEvents(category) {
    if (category === 'all') {
        // Resetar a exibição e mostrar todos os eventos
        displayEvents(window.allEvents);
    } else {
        const filteredEvents = window.allEvents.filter(event =>
            event.categoria && event.categoria.toLowerCase() === category.toLowerCase()
        );
        displayEvents(filteredEvents);
    }
}

// Função para buscar eventos por pesquisa
function searchEvents(query) {
    const filteredEvents = window.allEvents.filter(event =>
        event.titulo.toLowerCase().includes(query.toLowerCase()) ||
        event.descricao.toLowerCase().includes(query.toLowerCase())
    );
    displayEvents(filteredEvents);
}

// Adicionar eventos aos botões de filtro
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        filterEvents(category);
    });
});

// Event Listener para o input de pesquisa na navbar
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value;
    searchEvents(query);
});

// Carregar eventos ao abrir a página
window.onload = fetchEvents;
