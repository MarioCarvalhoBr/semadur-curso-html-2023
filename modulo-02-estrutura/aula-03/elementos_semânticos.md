# Slide 1: Introdução aos Elementos Semânticos

## O que são Elementos Semânticos?

- **Definição**: Elementos semânticos descrevem claramente seu significado tanto para o navegador quanto para o desenvolvedor.
- **Exemplos**: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`.

### Importância da Semântica

- Melhora a acessibilidade.
- Facilita a manutenção e compreensão do código.

---

# Slide 2: `<header>` e `<footer>`

## Elementos para Cabeçalho e Rodapé

- **`<header>`**: Representa o cabeçalho do documento ou de uma seção.
- **`<footer>`**: Representa o rodapé do documento ou de uma seção.

### Exemplo

```html
<header>
    <h1>Título do Site</h1>
    <nav> <!-- Barra de navegação --> </nav>
</header>

<footer>
    <p>&copy; 2023 Minha Empresa</p>
</footer>
```

---

# Slide 3: `<nav>`

## Navegação Consistente

- **Definição**: `<nav>` é usado para definir um bloco de navegação, geralmente com links para outras páginas ou seções do site.
- **Uso**: Principalmente para menus principais, barras de navegação, índices.

### Exemplo

```html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Sobre</a></li>
    </ul>
</nav>
```

---

# Slide 4: `<article>` e `<section>`

## Agrupando Conteúdo Relacionado

- **`<article>`**: Representa um conteúdo independente e autossuficiente.
- **`<section>`**: Representa uma seção genérica de documentos, quando não há um elemento mais específico para usar.

### Exemplo

```html
<article>
    <h2>Título do Artigo</h2>
    <p>Conteúdo do artigo...</p>
</article>

<section>
    <h2>Seção de Notícias</h2>
    <!-- Artigos de notícias -->
</section>
```

---

# Slide 5: `<aside>`

## Conteúdo Complementar

- **Definição**: `<aside>` é usado para marcar conteúdos relacionados ao conteúdo principal, como barras laterais.
- **Característica**: O conteúdo deve ser indiretamente relacionado ao conteúdo principal.

### Exemplo

```html
<aside>
    <h3>Leia também:</h3>
    <ul>
        <li><a href="#">Artigo Relacionado 1</a></li>
        <!-- Mais links -->
    </ul>
</aside>
```

---

# Slide 6: Uso de Elementos Semânticos para Layout

## Estruturando uma Página com Elementos Semânticos

- **Estrutura**: Utilize elementos sem

ânticos para criar um layout claro e acessível.
- **Benefícios**: Melhora a SEO, acessibilidade e manutenibilidade do site.

### Exemplo de Layout

```html
<body>
    <header> <!-- Cabeçalho do site --> </header>
    <nav> <!-- Navegação principal --> </nav>
    <main>
        <article> <!-- Conteúdo principal --> </article>
        <aside> <!-- Conteúdo relacionado ou publicidade --> </aside>
    </main>
    <footer> <!-- Rodapé do site --> </footer>
</body>
```

---

# Slide 7: `<main>`

## Destacando o Conteúdo Principal

- **Definição**: `<main>` é usado para envolver o conteúdo principal e único da página.
- **Uso**: Garante que o conteúdo principal seja facilmente identificado.

### Exemplo

```html
<main>
    <article>
        <h2>Título do Artigo</h2>
        <p>Texto do artigo...</p>
    </article>
</main>
```

---

# Slide 8: Melhores Práticas com Elementos Semânticos

## Dicas para Uso Eficiente

- **Não use `<div>` para tudo**: Escolha elementos semânticos apropriados.
- **Acessibilidade**: Use elementos semânticos para ajudar leitores de tela e mecanismos de busca a entender a estrutura do seu site.
- **Teste a Semântica**: Use ferramentas como o validador de HTML do W3C para verificar a semântica.

---

# Slide 9: Exercícios Práticos

## Consolidando o Aprendizado

1. **Crie uma Página Web**: Utilize elementos semânticos para estruturar uma página com cabeçalho, conteúdo principal, barra lateral e rodapé.
2. **Análise de Semântica**: Encontre uma página web e identifique os elementos semânticos utilizados. Sugira melhorias.
3. **Reestruturação**: Pegue uma página existente e reestruture-a usando elementos semânticos.

---

# Slide 10: Conclusão

- **Elementos Semânticos no HTML**: Ferramentas essenciais para criar páginas web claras, acessíveis e bem estruturadas.
- **Importância da Prática**: A aplicação prática desses conceitos é crucial para desenvolver habilidades efetivas em desenvolvimento web.
- **Mantenha-se Atualizado**: A web está em constante evolução. Mantenha-se atualizado com as melhores práticas e novos elementos semânticos.