# Slide 1: Introdução ao CSS3 Responsivo

## O que é Design Responsivo?

- **Definição**: Técnica de design web que faz com que páginas se adaptem a diferentes tamanhos de tela.
- **Importância**: Essencial para a criação de sites acessíveis em uma ampla gama de dispositivos.

---

# Slide 2: Media Queries em CSS3

## Base do Design Responsivo

- **Funcionamento**: Permite a aplicação de estilos com base nas características do dispositivo, como largura da tela.
- **Sintaxe Básica**: `@media only screen and (max-width: 600px) { /* Estilos */ }`

### Exemplo de Media Query

```css
@media screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

---

# Slide 3: Unidades Relativas

## Adaptabilidade das Unidades de Medida

- **Unidades como `%`, `em`, `rem`, `vw`, `vh`**: Adaptam-se ao tamanho do dispositivo ou elemento pai.
- **Vantagem**: Maior flexibilidade e adaptabilidade do layout.

### Exemplo de Uso de Unidades Relativas

```css
.container {
    width: 80%;
    padding: 2em;
}
```

---

# Slide 4: Flexbox para Layouts Responsivos

## Flexibilidade e Eficiência

- **Flexbox**: Sistema de layout unidimensional ideal para componentes de interface e pequenos layouts.
- **Propriedades como `flex-wrap`, `justify-content`**: Facilitam a criação de layouts responsivos.

### Exemplo de Flexbox

```css
.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
```

---

# Slide 5: CSS Grid para Layouts Complexos

## Estruturação Avançada de Páginas

- **CSS Grid**: Sistema de layout bidimensional para criação de layouts complexos de página inteira.
- **Responsividade**: Configurações de grid que mudam com media queries.

### Exemplo de CSS Grid

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

---

# Slide 6: Imagens Responsivas

## Adaptação de Imagens a Diferentes Telas

- **`img { max-width: 100%; height: auto; }`**: Garante que as imagens não sejam maiores que seus containers.
- **Imagens de Alta Resolução**: Uso de `srcset` para diferentes resoluções.

### Exemplo de Imagem Responsiva

```html
<img src="image.jpg" alt="Descrição" style="max-width: 100%; height: auto;">
```

---

# Slide 7: Tipografia Responsiva

## Escalabilidade do Texto

- **Viewport Width (`vw`) para Tamanhos de Fonte**: Ajusta o tamanho do texto com base no tamanho da tela.
- **Legibilidade**: Importante para a acessibilidade em diferentes dispositivos.

### Exemplo de Tipografia Responsiva

```css
body {
    font-size: 2vw;
}
```

---

# Slide 8: Ocultação e Exibição Condicional

## Controlando a Visibilidade com Media Queries

- **Técnicas**: Ocultar ou mostrar elementos específicos em certos tamanhos de tela.
- **Exemplo**: Menu de navegação que se transforma em um menu hambúrguer em telas menores.

### Exemplo de Ocultação Condicional

```css
@media screen and (max-width: 600px) {
    .desktop-menu {
        display: none;
    }
}
```

---

# Slide 9: Exercícios Práticos

## Aplicando os Conceitos

1. **Crie um Layout Flexível**: Utilize Flexbox e Grid para criar um layout que se adapte a diferentes tamanhos de tela.
2. **Otimização de Imagens**: Implemente imagens responsivas que se ajustam para diferentes dispositivos.
3. **Tipografia Adaptável**: Experimente com tamanhos de fonte responsivos para melhorar a legibilidade em diversos dispositivos.

---

# Slide 10: Conclusão

- **CSS3 Responsivo**: Fundamental para a criação de sites que proporcionam uma ótima experiência em todos os dispositivos.
- **

Importância da Prática**: A habilidade de criar designs responsivos é essencial para todos os desenvolvedores web.
- **Inovação Contínua**: Mantenha-se atualizado com as novas técnicas e tendências em design responsivo.