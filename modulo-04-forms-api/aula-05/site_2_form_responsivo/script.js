document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
    // Lógica de validação e envio
    // Campos: nome, idade, email, senha, mensagem
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var mensagem = document.getElementById('mensagem').value;

    // Validações
    if (nome == '') {
        alert('Preencha o campo nome');
        return;
    }

    if (idade == '') {
        alert('Preencha o campo idade');
        return;
    }

    if (email == '') {
        alert('Preencha o campo email');
        return;
    }

    // Regra para saber se o email está no formato @zzzz.yyy
    var regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
        alert('Preencha um email válido');
        return;
    }

    if (senha == '') {
        alert('Preencha o campo senha');
        return;
    }

    // Criar uma regra para validar se a senha tem pelo menos 6 caracteres
    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres');
        return;
    }
    // Criar uma regra para validar se a senha tem pelo menos 1 letra maiúscula
    var regex = /[A-Z]/;
    if (!regex.test(senha)) {
        alert('A senha deve ter pelo menos 1 letra maiúscula');
        return;
    }
    // Criar uma regra para validar se a senha tem pelo menos 1 número
    var regex = /[0-9]/;
    if (!regex.test(senha)) {
        alert('A senha deve ter pelo menos 1 número');
        return;
    }

    if (mensagem == '') {
        alert('Preencha o campo mensagem');
        return;
    }

    alert('Sucesso!\nDados enviados ao servidor.\nNome: ' + nome + '\nIdade: ' + idade + '\nEmail: ' + email + '\nSenha: ' + senha + '\nMensagem: ' + mensagem)
});