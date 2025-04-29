function post(){

const form = document.getElementById('formCadastro');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;

      try {
        const response = await fetch('http://localhost:3000/api/usuarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, email })
        });

        const data = await response.json();

        if (response.ok) {
          mensagem.textContent = data.mensagem;
          form.reset();
        } else {
          mensagem.textContent = `Erro: ${data.erro}`;
        }
      } catch (error) {
        mensagem.textContent = `Erro na requisição: ${error.message}`;
      }
    });

}