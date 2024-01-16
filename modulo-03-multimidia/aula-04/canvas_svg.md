# Slide 1: Introdução ao Canvas

## O que é Canvas?

- **Definição**: Canvas é um elemento HTML usado para desenhar gráficos e imagens via scripting (usualmente JavaScript).
- **Uso**: Ideal para gráficos bidimensionais, animações, jogos, e tratamento de imagens.

### Exemplo de Estrutura Canvas

```html
<canvas id="meuCanvas" width="200" height="200"></canvas>
```

---

# Slide 2: Desenhando com Canvas

## Primeiros Passos no Canvas

- **Contexto de Renderização**: Para desenhar no canvas, é preciso obter o contexto de renderização (2D ou WebGL).
- **Métodos de Desenho**: O contexto fornece funções para desenhar formas, textos, imagens, etc.

### Exemplo de Desenho Básico

```javascript
const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 50, 50); // Desenha um retângulo vermelho
```

---

# Slide 3: Manipulando o Canvas

## Desenhos Complexos e Animações

- **Linhas e Formas**: Use métodos como `moveTo` e `lineTo` para desenhar linhas e formas.
- **Animações**: Use `requestAnimationFrame` para criar animações fluidas.

### Exemplo de Animação

```javascript
// Exemplo de função de animação
```

---

# Slide 4: Introdução ao SVG

## O que é SVG?

- **Definição**: SVG (Scalable Vector Graphics) é um formato baseado em XML para descrever gráficos vetoriais.
- **Uso**: Ideal para gráficos complexos que precisam ser redimensionáveis sem perda de qualidade.

### Exemplo de Estrutura SVG

```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

---

# Slide 5: Elementos Básicos do SVG

## Formas e Textos em SVG

- **Formas**: Rect, Circle, Ellipse, Line, Polyline, Polygon.
- **Texto**: Elemento `<text>` para adicionar texto.

### Exemplo de Formas SVG

```html
<svg width="200" height="100">
    <rect x="10" y="10" width="30" height="30" fill="blue" />
    <circle cx="60" cy="50" r="20" fill="red" />
    <!-- Outras formas -->
</svg>
```

---

# Slide 6: Estil

izando SVG

## Personalização com CSS e Atributos

- **CSS**: SVG pode ser estilizado com CSS externo ou inline.
- **Atributos de Estilo**: Cores, bordas, preenchimentos e mais.

### Exemplo de SVG Estilizado

```html
<svg width="200" height="100">
    <circle cx="50" cy="50" r="40" style="fill: yellow; stroke: green; stroke-width: 4;" />
    <!-- Mais elementos SVG -->
</svg>
```

---

# Slide 7: Interatividade em SVG

## SVG e JavaScript

- **Eventos**: Elementos SVG podem interagir com eventos de mouse e teclado.
- **Manipulação via JavaScript**: Altere propriedades e estilos SVG dinamicamente.

### Exemplo de SVG Interativo

```html
<svg width="100" height="100">
    <circle id="meuCirculo" cx="50" cy="50" r="40" fill="blue" />
</svg>
<script>
    document.getElementById('meuCirculo').addEventListener('click', function() {
        this.setAttribute('fill', 'red');
    });
</script>
```

---

# Slide 8: Comparando Canvas e SVG

## Canvas vs SVG: Quando Usar Cada Um?

- **Canvas**: Melhor para gráficos bitmap, jogos e animações complexas.
- **SVG**: Ideal para gráficos vetoriais, ícones e onde a escalabilidade é crucial.

### Considerações de Desempenho

- **Canvas**: Pode ser mais rápido para pixel manipulation.
- **SVG**: Melhor desempenho em gráficos que precisam ser redimensionados ou reutilizados.

---

# Slide 9: Exercícios Práticos

## Aplicando os Conceitos

1. **Canvas Criativo**: Desenhe um cenário simples com formas no Canvas.
2. **SVG Dinâmico**: Crie um gráfico SVG que mude de cor ao passar o mouse.
3. **Comparação**: Implemente o mesmo gráfico em Canvas e SVG e compare os resultados.

---

# Slide 10: Conclusão

- **Poder dos Gráficos**: Canvas e SVG são ferramentas poderosas para gráficos na web.
- **Escolha Adequada**: Dependendo das necessidades do seu projeto, escolha entre Canvas e SVG para obter os melhores resultados.
- **Prática e Exploração**: Experimente com ambos para entender suas capacidades e limitações.