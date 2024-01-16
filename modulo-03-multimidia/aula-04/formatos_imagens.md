# Slide 1: Introdução aos Formatos de Imagem

## Visão Geral dos Formatos de Imagem

- **Contexto**: Diferentes formatos de imagem são usados para diversos propósitos na web e em multimídia.
- **JPEG, PNG, GIF, SVG, WebP**: Visão geral dos formatos mais comuns e suas utilizações.

---

# Slide 2: JPEG

## Características e Uso do JPEG

- **Definição**: JPEG é ideal para fotografias e imagens complexas.
- **Compressão com Perda**: Oferece um bom equilíbrio entre qualidade e tamanho de arquivo.

### Exemplo de Uso

```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

---

# Slide 3: PNG

## Características e Uso do PNG

- **Definição**: PNG é usado para imagens com transparência e detalhes nítidos.
- **Compressão Sem Perda**: Mantém a qualidade da imagem após a compressão.

### Exemplo de Uso

```html
<img src="imagem.png" alt="Descrição da imagem" style="background-color: none;">
```

---

# Slide 4: GIF e Animações

## GIFs Animados

- **Uso**: GIF é frequentemente usado para animações simples e gráficos com cores limitadas.
- **Animações**: Criação de pequenas animações loop.

### Exemplo de Animação GIF

```html
<img src="animacao.gif" alt="Descrição da animação">
```

---

# Slide 5: SVG

## Vetores e SVG

- **Definição**: SVG é um formato de imagem vetorial, ideal para ícones e gráficos escaláveis.
- **Personalização e Interatividade**: Pode ser estilizado e manipulado com CSS e JavaScript.

### Exemplo SVG

```html
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
```

---

# Slide 6: WebP

## O Futuro dos Formatos de Imagem

- **Características**: WebP oferece alta qualidade com tamanhos de arquivo menores.
- **Compatibilidade**: Suporte crescente em navegadores modernos.

### Exemplo de Uso WebP

```html
<picture>
    <source srcset="imagem.webp" type="image/webp">
    <img src="imagem.jpg" alt="Descrição da imagem">
</picture>
```

---

# Slide 7: Multimídia Avançada



## Técnicas Avançadas de Multimídia

- **360° e VR**: Imagens e vídeos em 360 graus para experiências imersivas.
- **Realidade Aumentada**: Integração de elementos digitais ao mundo real.
- **Streaming de Vídeo**: Técnicas para streaming eficiente de vídeo.

### Exemplo de Vídeo 360°

```html
<video controls>
    <source src="video360.mp4" type="video/mp4">
    Seu navegador não suporta vídeo HTML.
</video>
```

---

# Slide 8: Otimização de Imagens para Web

## Melhorando o Desempenho

- **Redução de Tamanho**: Ferramentas para comprimir imagens sem perder qualidade.
- **Escolha do Formato Correto**: Baseado no conteúdo da imagem e na necessidade de transparência ou animação.
- **Carregamento Preguiçoso (Lazy Loading)**: Carrega imagens à medida que são necessárias.

### Exemplo de Lazy Loading

```html
<img src="imagem.jpg" alt="Descrição da imagem" loading="lazy">
```

---

# Slide 9: Acessibilidade em Multimídia

## Tornando Conteúdo Multimídia Acessível

- **Legendas e Transcrições**: Para vídeos e áudios.
- **Descrições Alt**: Textos alternativos claros e descritivos para imagens.
- **Foco na Experiência do Usuário**: Garantir que o conteúdo multimídia seja acessível a todos.

### Exemplo de Acessibilidade

```html
<img src="imagem.jpg" alt="Descrição detalhada da imagem">
```

---

# Slide 10: Exercícios Práticos

## Aplicando os Conceitos

1. **Criação de uma Galeria de Imagens**: Utilize diferentes formatos de imagem e aplique técnicas de otimização.
2. **Vídeo com Legendas**: Incorpore um vídeo com legendas e transcrição.
3. **Animação Interativa**: Crie uma animação GIF ou SVG interativa.

---

# Slide 11: Conclusão

- **Importância da Multimídia**: Imagens e vídeos desempenham um papel crucial na web moderna.
- **Escolha Inteligente de Formatos**: A seleção do formato de imagem certo pode melhorar significativamente a experiência do usuário e o desempenho do site.
- **Prática Contínua**: Explore as possibilidades criativas e técnicas para dominar o uso de multimídia na web.