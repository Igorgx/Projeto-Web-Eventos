document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores dos campos de matrícula e senha
    const matricula = document.getElementById("matricula").value; 
    const senha = document.getElementById("senha").value; 

    try {
        // Realiza a requisição ao backend
        const response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ matricula, senha }), // Envia os dados como JSON
        });

        if (!response.ok) {
            // Trata erros HTTP
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro desconhecido!');
        }

        const data = await response.json(); // Converte a resposta para JSON

        // Exibe mensagem de sucesso e armazena o token
        alert('Login realizado com sucesso!');
        localStorage.setItem('token', data.token); // Armazena o token no localStorage
        // Redireciona para outra página (opcional)
        // window.location.href = '/dashboard.html';
    } catch (error) {
        // Trata erros de conexão ou outros problemas
        console.error('Erro:', error);
        alert(`Erro ao conectar ao servidor: ${error.message}`);
    }
});

