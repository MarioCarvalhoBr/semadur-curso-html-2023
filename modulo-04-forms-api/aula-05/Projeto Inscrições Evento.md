Para criar um formulário de inscrição para eventos com validação, você pode usar HTML para a estrutura do formulário e JavaScript para adicionar interatividade e validação. Também utilizarei CSS básico para um pouco de estilização. Aqui está um exemplo de como você pode estruturar o código:

### Estrutura HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Formulário de Inscrição para Eventos</title>
    <style>
        .form-group {
            margin-bottom: 10px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
        }
        .form-group .error {
            color: red;
            font-size: 0.8em;
        }
        button {
            padding: 10px 15px;
            background-color: blue;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h2>Formulário de Inscrição para Eventos</h2>
    <form id="eventForm">
        <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required>
            <div class="error" id="nameError"></div>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <div class="error" id="emailError"></div>
        </div>

        <div class="form-group">
            <label for="event">Evento:</label>
            <select id="event" name="event" required>
                <option value="">Selecione um Evento</option>
                <option value="conference">Conferência</option>
                <option value="seminar">Seminário</option>
                <option value="workshop">Workshop</option>
            </select>
            <div class="error" id="eventError"></div>
        </div>

        <button type="submit">Inscrever</button>
    </form>

    <script>
        document.getElementById('eventForm').addEventListener('submit', function(e) {
            e.preventDefault();
            validateForm();
        });

        function validateForm() {
            // Exemplo de validação simples
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var event = document.getElementById('event').value;
            var valid = true;

            if (name.length === 0) {
                document.getElementById('nameError').innerText = 'Por favor, insira seu nome.';
                valid = false;
            } else {
                document.getElementById('nameError').innerText = '';
            }

            if (email.length === 0) {
                document.getElementById('emailError').innerText = 'Por favor, insira seu email.';
                valid = false;
            } else {
                document.getElementById('emailError').innerText = '';
            }

            if (event.length === 0) {
                document.getElementById('eventError').innerText = 'Por favor, selecione um evento.';
                valid = false;
            } else {
                document.getElementById('eventError').innerText = '';
            }

            if (valid) {
                // Processa o formulário ou exibe mensagem de sucesso
                alert('Inscrição realizada com sucesso!');
            }
        }
    </script>
</body>
</html>
```

### Explicação do Código:

- **Estrutura do Formulário**: O formulário possui três campos - nome, email e seleção de evento.
- **Estilos CSS**: Adicionei estilos básicos para melhorar a aparência do formulário.
- **JavaScript para Validação**: O script valida se todos os campos foram preenchidos. Se a validação falhar, mensagens de erro são exibidas.

### Notas Importantes:

- **Valores do Formulário**: Os valores dos campos e seleções devem ser ajustados conforme a necessidade do evento.
- **Validação Avançada**: Você pode expandir a validação para verificar outros critérios, como formatos específicos de email.
- **Processamento do Formulário**: Este exemplo não inclui o processamento real do formulário. Em um cenário real, você precisaria enviar os dados do formulário para um servidor ou processá-los de acordo com a necessidade do seu aplicativo.