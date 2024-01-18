# Slide 1: Introdução ao CSS 3

## O que é CSS 3?

- **Definição**: CSS 3 é a última versão da Cascading Style Sheets, usada para estilizar e formatar páginas web.
- **Evolução**: Apresenta novas funcionalidades e maior flexibilidade comparado às versões anteriores.

---

# Slide 2: Seletores Avançados em CSS 3

## Expandindo as Possibilidades de Seleção

- **Seletores de Atributo**: Seleciona elementos com base em atributos e seus valores.
- **Seletores Pseudo-classes**: Como `:hover`, `:focus`, `:nth-child`.

### Exemplo de Seletores

```css
input[type="text"] { /* Estilos */ }
div:first-child { /* Estilos */ }
```

---

# Slide 3: Box Model em CSS 3

## Compreendendo o Box Model

- **Componentes**: Margem, borda, padding e conteúdo.
- **Box-sizing**: Controla como o box model é calculado.

### Exemplo de Box Model

```css
div {
    margin: 10px;
    border: 1px solid black;
    padding: 5px;
    box-sizing: border-box;
}
```

---

# Slide 4: Gradientes em CSS 3

## Cores e Transições Suaves

- **Tipos**: Lineares e radiais.
- **Aplicações**: Fundos, botões, barras de navegação.

### Exemplo de Gradiente

```css
div {
    background: linear-gradient(to right, red, yellow);
}
```

---

# Slide 5: Sombras em CSS 3

## Adicionando Profundidade e Realismo

- **Box Shadow**: Sombra ao redor dos elementos.
- **Text Shadow**: Sombra em textos.

### Exemplo de Sombras

```css
div {
    box-shadow: 5px 5px 5px grey;
}
h1 {
    text-shadow: 2px 2px red;
}
```

---

# Slide 6: Transições em CSS 3

## Suavizando Mudanças de Estado

- **Propósito**: Efeitos suaves na mudança de propriedades.
- **Sintaxe**: `transition: property duration easing-function delay;`

### Exemplo de Transição

```css
div:hover {
    transition: background-color 0.5s ease-in-out;
    background-color: blue;
}
```

---

# Slide 7: Transformações em CSS 3

## Alterando Forma e Posição

- **Transformações**: `rotate`, `scale`, `translate`, `skew`.
- **Uso**: Animações, ajustes de layout.

### Exemplo de Transformação

```css
div {
    transform: rotate(45deg);
}
```

---

# Slide 8: Animações em CSS 3

## Criando Movimento com Keyframes

- **Keyframes**: Define os estados da animação.
- **Propriedades**: Duração, iteração, direção.

### Exemplo de Animação

```css
@keyframes animacaoExemplo {
    from { background-color: red; }
    to { background-color: yellow; }
}
div {
    animation: animacaoExemplo 2s infinite;
}
```

---

# Slide 9: Flexbox em CSS 3

## Layout Flexível e Responsivo

- **Flexbox Container**: Define um contexto flexível.
- **Flex Items**: Elementos filhos que se adaptam ao container.

### Exemplo de Flexbox

```css
.container {
    display: flex;
    justify-content: space-between;
}
```

---

# Slide 10: Grid Layout em CSS 3

## Estruturando Layouts Complexos

- **CSS Grid**: Sistema bidimensional de layout.
- **Grid Container e Items**: Controle fino sobre o posicionamento e tamanho dos elementos.

### Exemplo de Grid

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
```

---

# Slide 11: Media Queries em CSS 3

## Design Responsivo para Diferentes Dispositivos

- **Adaptação**: Muda estilos com base no tamanho da tela ou outras características do dispositivo.
- **Uso**: Layouts diferentes para desktop, tablet, celular.

### Exemplo de Media Query



```css
@media screen and (max-width: 600px) {
    .container {
        display: block;
    }
}
```

---

# Slide 12: Pseudo-Elementos em CSS 3

## ::before e ::after

- **Finalidade**: Adicionar conteúdo estilizado antes ou depois de um elemento.
- **Aplicações**: Decorações, ícones, pequenas adições visuais.

### Exemplo de Pseudo-Elemento

```css
p::before {
    content: "Nota:";
    font-weight: bold;
}
```

---

# Slide 13: Variáveis CSS

## Simplificando a Manutenção do Código

- **Definição**: Variáveis para armazenar valores reutilizáveis.
- **Vantagem**: Facilita a alteração de valores globais.

### Exemplo de Variável CSS

```css
:root {
    --cor-primaria: blue;
}
div {
    background-color: var(--cor-primaria);
}
```

---

# Slide 14: Exercícios Práticos

## Colocando em Prática

1. **Crie uma Página com Layout Flexível**: Utilize Flexbox e Grid para criar um layout responsivo.
2. **Animação e Transições**: Adicione animações e transições a elementos na interação do usuário.
3. **Estilização Avançada**: Experimente com gradientes, sombras e transformações para criar um design único.

---

# Slide 15: Conclusão

- **Potencial do CSS 3**: Uma ferramenta poderosa para criar designs sofisticados e responsivos na web.
- **Importância da Prática**: A experiência prática é crucial para dominar as nuances do CSS 3.
- **Atualização Contínua**: Mantenha-se atualizado com as últimas tendências e recursos do CSS 3.