# Slide 1: Introdução ao Bootstrap 5

## O que é Bootstrap 5?

- **Definição**: Bootstrap 5 é a mais recente versão do popular framework front-end para desenvolvimento de websites responsivos e mobile-first.
- **Vantagens**: Componentes reutilizáveis, responsividade integrada, fácil personalização.

---

# Slide 2: Começando com Bootstrap 5

## Configurando o Ambiente

- **Inclusão via CDN**: `<link>` para CSS e `<script>` para JavaScript.
- **Download Local**: Para personalização e uso offline.

### Exemplo de Inclusão via CDN

```html
<link href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.0/css/bootstrap.min.css" rel="stylesheet">
```

---

# Slide 3: Sistema de Grid no Bootstrap 5

## Layouts Responsivos Facilitados

- **Grid de 12 Colunas**: Flexível e fácil de usar.
- **Classes de Grid**: `.col-`, `.col-md-`, `.col-lg-`, etc.

### Exemplo de Layout com Grid

```html
<div class="container">
    <div class="row">
        <div class="col-md-8">.col-md-8</div>
        <div class="col-md-4">.col-md-4</div>
    </div>
</div>
```

---

# Slide 4: Componentes de Navegação

## Barras de Navegação e Menus

- **Navbar**: Personalizável e responsiva.
- **Dropdowns e Toggles**: Para menus complexos.

### Exemplo de Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Conteúdo da Navbar -->
</nav>
```

---

# Slide 5: Botões e Formulários

## Estilização e Funcionalidade

- **Botões**: Diversos estilos e tamanhos.
- **Formulários**: Layout e validação integrados.

### Exemplo de Botões

```html
<button class="btn btn-primary">Botão Principal</button>
<button class="btn btn-secondary">Botão Secundário</button>
```

---

# Slide 6: Componentes de Cards

## Exibição de Conteúdo Organizado

- **Estrutura**: Cabeçalho, corpo e rodapé.
- **Variedade**: Imagens, listas, links.

### Exemplo de Card

```html
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Título do Card</h5>
        <p class="card-text">Conteúdo do card.</p>
        <a href="#" class="btn btn-primary">Ação</a>
    </div>
</div>
```

---

# Slide 7: Componentes de Alerta

## Mensagens e Feedbacks Visuais

- **Tipos de Alerta**: Sucesso, erro, informação, etc.
- **Fechamento de Alerta**: Com botão de fechar.

### Exemplo de Alerta

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Atenção!</strong> Mensagem de alerta.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

---

# Slide 8: Sistema de Modal

## Janelas de Diálogo Dinâmicas

- **Uso**: Mensagens, confirmações, formulários.
- **Interatividade**: Abre e fecha com JavaScript.

### Exemplo de Modal

```html
<!-- Botão para abrir o modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Abrir Modal
</button>

<!-- Estrutura do Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <!-- Conteúdo do Modal -->
</div>
```

---

# Slide 9: Carrossel de Imagens

## Apresentação Dinâmica de Conteúdos

- **Slides de Imagens**: Com controles de navegação.
- **Responsividade**: Adapta-se a diferentes tamanhos de tela.

### Exemplo de Carrossel

```html
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <!-- Itens do carrossel -->
</div>
```

---



# Slide 10: Acordeões e Colapsáveis

## Conteúdo Expansível e Ocultável

- **Acordeões**: Para FAQs, listas de conteúdo.
- **Colapsáveis**: Para mostrar/esconder informações.

### Exemplo de Acordeão

```html
<div class="accordion" id="accordionExample">
    <!-- Itens do acordeão -->
</div>
```

---

# Slide 11: Responsividade e Utilitários

## Ajustes Rápidos e Eficientes

- **Classes de Utilitários**: Margem, padding, visibilidade.
- **Adaptação Rápida**: Sem a necessidade de CSS adicional.

### Exemplo de Utilitários

```html
<div class="mt-3 mb-2">Espaçamento Responsivo</div>
```

---

# Slide 12: Personalização do Bootstrap

## Adaptando ao Seu Estilo

- **SASS e Variáveis**: Customize o Bootstrap com SASS.
- **Temas**: Crie temas únicos alterando variáveis e recompilando.

### Exemplo de Personalização

```scss
$theme-colors: (
  "primary": #007bff,
  "secondary": #6c757d
);
```

---

# Slide 13: Bootstrap Icons

## Ícones Integrados

- **Coleção de Ícones**: Uso fácil e coerente com o design do Bootstrap.
- **SVG e Fonte de Ícones**: Escolha o método que melhor se adequa ao seu projeto.

### Exemplo de Ícone

```html
<i class="bi bi-alarm"></i>
```

---

# Slide 14: Exercícios Práticos

## Colocando em Prática

1. **Crie uma Página com Bootstrap**: Utilize componentes do Bootstrap para montar uma página web.
2. **Personalize o Design**: Aplique estilos personalizados para adaptar os componentes às suas necessidades.
3. **Explore os Componentes**: Experimente diferentes componentes e veja como eles podem interagir entre si.

---

# Slide 15: Conclusão

- **Bootstrap 5**: Uma ferramenta poderosa para desenvolvimento web rápido e responsivo.
- **Flexibilidade e Eficiência**: Combina facilidade de uso com a possibilidade de personalização avançada.
- **Importância da Experimentação**: A prática é essencial para dominar o Bootstrap e descobrir seu potencial completo.