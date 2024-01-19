# Slide 1: Introdução aos Frameworks Responsivos Frontend

## O Papel dos Frameworks no Desenvolvimento Web

- **Definição**: Frameworks responsivos fornecem uma coleção de ferramentas para criar websites adaptáveis e atraentes.
- **Importância**: Aceleram o desenvolvimento e garantem consistência e compatibilidade entre navegadores e dispositivos.

---

# Slide 2: Bootstrap 5

## O Framework Mais Popular

- **Características**: Sistema de grid flexível, componentes reutilizáveis, ampla comunidade.
- **Novidades no Bootstrap 5**: Sem jQuery, ícones integrados, melhor suporte a RTL.

### Exemplo de Uso do Bootstrap 5

```html
<link href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.0/css/bootstrap.min.css" rel="stylesheet">
<div class="container">
    <div class="row">
        <div class="col-md-4">Coluna 1</div>
        <div class="col-md-8">Coluna 2</div>
    </div>
</div>
```

---

# Slide 3: Bootstrap Material Design (MD)

## Bootstrap com Estilo Material Design

- **Estética**: Combina a popularidade do Bootstrap com a linguagem de design Material da Google.
- **Componentes**: Botões com efeito de onda, cartões, inputs flutuantes.

### Exemplo de Bootstrap MD

```html
<button class="btn btn-primary btn-md">Botão MD</button>
```

---

# Slide 4: Materialize

## Framework Baseado em Material Design

- **Diferenças**: Não depende do Bootstrap, construído do zero com Material Design.
- **Características**: Componentes ricos, animações suaves, responsivo.

### Exemplo de Materialize

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">
<button class="waves-effect waves-light btn">Botão</button>
```

---

# Slide 5: Foundation

## Um Poderoso Framework Responsivo

- **Visão Geral**: Flexível e modular, adequado para projetos complexos.
- **Recursos**: Sistema de grid avançado, utilitários, componentes acessíveis.

### Exemplo de Foundation

```html
<link href="https://cdn.jsdelivr.net/foundation/6.4.3/css/foundation.min.css" rel="stylesheet">
<div class="grid-x grid-margin-x">
    <div class="cell small-6">6 células</div>
    <div class="cell small-6">6 células</div>
</div>
```

---

# Slide 6: Tailwind CSS

## Framework de Utilitário-Primeiro

- **Conceito**: Foco em classes de utilidade para um design rápido e customizado.
- **Diferenciais**: Abordagem “utility-first”, alta personalização.

### Exemplo de Tailwind CSS

```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.4/dist/tailwind.min.css" rel="stylesheet">
<div class="p-4 mb-4 text-green-700 bg-green-200 rounded-lg">Alerta Tailwind</div>
```

---

# Slide 7: Comparativo entre Frameworks

## Escolhendo o Framework Certo

- **Bootstrap vs Materialize**: Estilos prontos vs customização de Material Design.
- **Foundation vs Tailwind**: Estruturas complexas vs controle granular.

---

# Slide 8: Personalizando Frameworks

## Estendendo e Adaptando

- **SASS e LESS**: Muitos frameworks permitem customização com pré-processadores CSS.
- **Sobrescrevendo Estilos**: Adicione seu próprio CSS para refinamentos específicos.

### Dica de Personalização

```css
/* Sobrescrevendo estilos do Bootstrap */
.navbar {
    background-color: #333;
}
```

---

# Slide 9: Exercícios Práticos

## Aplicando os Conceitos

1. **Construa uma Página com Bootstrap 5**: Utilize o sistema de grid e componentes.
2. **Experimente com Tailwind**: Crie um layout usando apenas classes de utilidade.
3. **Materialize vs Bootstrap MD**: Compare a construção de um formulário com ambos.

---

# Slide 10: Conclusão



- **Frameworks Responsivos**: Ferramentas essenciais para desenvolvedores web modernos.
- **Adaptação e Aprendizado**: A escolha do framework deve se basear nos requisitos do projeto e preferências pessoais.
- **Prática Contínua**: A habilidade de trabalhar com diferentes frameworks é valorizada e amplia suas opções de design.