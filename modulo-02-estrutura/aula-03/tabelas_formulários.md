# Slide 1: Introdução a Tabelas em HTML

## O que são Tabelas?

- **Definição**: As tabelas são usadas para organizar dados em linhas e colunas.
- **Uso**: Ideal para apresentar informações comparativas e listas de dados.

### Estrutura Básica de uma Tabela

```html
<table>
    <tr>
        <th>Cabeçalho 1</th>
        <th>Cabeçalho 2</th>
    </tr>
    <tr>
        <td>Dado 1</td>
        <td>Dado 2</td>
    </tr>
</table>
```

---

# Slide 2: Elementos de uma Tabela

## Componentes de uma Tabela

- **`<table>`**: Define a tabela.
- **`<tr>`**: Linha da tabela.
- **`<th>`**: Célula do cabeçalho.
- **`<td>`**: Célula de dados.

### Exemplo Detalhado

```html
<table>
    <tr>
        <th>Nome</th>
        <th>Email</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>alice@example.com</td>
    </tr>
    <!-- Mais linhas e células -->
    <tr>
        <td> João </td>
        <td> joao@example.com </td>
    </tr>
</table>
```

---

# Slide 3: Estilizando Tabelas

## Melhorando a Aparência

- **CSS**: Use CSS para estilizar tabelas (bordas, cores, alinhamento).
- **Classes e IDs**: Atribua classes e IDs para estilizar elementos específicos.

### Exemplo com CSS

```html
<table style="border-collapse: collapse; width: 100%;">
    <tr style="border: 1px solid black;">
        <!-- Células da tabela -->
    </tr>
    <!-- Mais linhas -->
</table>
```

---

# Slide 4: Formulários em HTML

## O que são Formulários?

- **Definição**: Formulários são usados para coletar dados do usuário.
- **Elementos**: `<form>`, `<input>`, `<label>`, `<button>`, etc.

### Estrutura Básica de um Formulário

```html
<form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">
    <button type="submit">Enviar</button>
</form>
```

---

# Slide 5: Tipos de Inputs

## Diversos Tipos para Diversas Necessidades

- **Texto, Senha, Email, etc.**: `<input type="text">`, `<input type="password">`.
- **Radio e Checkbox**: Para seleções únicas ou múltiplas.

### Exemplo de Inputs

```html
<form>
    <input type="radio" id="masculino" name="genero" value="masculino">
    <label for="masculino">Masculino</label><br>
    <input type="radio" id="feminino" name="genero" value="feminino">
    <label for="feminino">Feminino</label><br>
    <input type="checkbox" id="newsletter" name="newsletter" value="sim">
    <label for="newsletter">Inscrever-se para newsletter</label>
</form>
```

---

# Slide 6: Controles de Formulário

## Mais Elementos de Formulário

- **`<select>`**: Lista suspensa de opções.
- **`<textarea>`**: Área de texto para entradas longas.

### Exemplo de Select e Textarea

```html
<form>
    <label for="pais">País:</label>
    <select id="pais" name="pais">
        <option value="brasil">Brasil</option>
        <option value="eua">EUA</option>
    </select><br>
    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem"></textarea>
</form>
```

---

# Slide 7: Atributos de Formulário

## Personalizando o Comportamento do Formulário

- **`action` e `method`**: Define para onde os dados do formulário são enviados e como.
- **`placeholder` e `required`**: Texto de exemplo e validação de campo obrigatório.

### Exemplo com Atributos

```html
<form action="submit.php" method="post">
    <input type="text" placeholder="Digite seu nome" required>
    <button type="submit">Enviar</button>
</form>
```

---

# Slide 8: Validação de Formulário

## Assegurando Dados Corretos

- **HTML5**: Oferece validação de formulário embutida para tipos de input como email, number, etc.
- **`pattern`**: Atributo para definir um padrão regex para validação.

### Exemplo de Validação

```html
<form>
    <input type="email" placeholder="Digite seu email" required>
    <input type="text" pattern="[A-Za-z]{3,}" title="Mínimo de 3 letras">
    <button type="submit">Enviar</button>
</form>
```

# Slide 9: Exercícios Práticos

## Aplicando os Conceitos

1. **Criar uma Tabela**: Construa uma tabela com cabeçalhos e pelo menos 3 linhas de dados.
2. **Formulário com Diversos Campos**: Desenvolva um formulário com diferentes tipos de input e validações.
3. **Estilizando com CSS**: Aplique estilos CSS personalizados à sua tabela

e formulário para melhorar a aparência e a usabilidade.

---

# Slide 10: Conclusão

- **Importância de Tabelas e Formulários**: Elementos fundamentais para a apresentação de dados e interação do usuário em páginas web.
- **Boas Práticas**: Utilize tabelas para dados organizados e formulários para coletar informações de forma eficiente.
- **Experimentação e Prática**: Encoraje a experimentação com diferentes layouts de tabelas e formulários, aplicando validações e estilos CSS para aprimorar a experiência do usuário.