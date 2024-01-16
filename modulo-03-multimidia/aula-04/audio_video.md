# Slide 1: Introdução a Mídia em HTML

## Incorporando Áudio e Vídeo

- **Contexto**: A capacidade de incorporar mídia é fundamental para sites modernos.
- **Elementos HTML**: `<audio>` e `<video>` são usados para incorporar arquivos de mídia diretamente em páginas web.

---

# Slide 2: Elemento `<audio>`

## Incorporando Áudio em HTML

- **Uso**: O elemento `<audio>` é usado para incorporar arquivos de som.
- **Atributos**: `src`, `controls`, `autoplay`, `loop`, entre outros.

### Exemplo Básico

```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Seu navegador não suporta áudio HTML.
</audio>
```

---

# Slide 3: Formatos de Áudio Suportados

## Compatibilidade e Formatos

- **Formatos Comuns**: MP3, WAV, OGG.
- **Importância da Compatibilidade**: Diferentes navegadores suportam diferentes formatos.

### Exemplo com Múltiplos Formatos

```html
<audio controls>
    <source src="audio.ogg" type="audio/ogg">
    <source src="audio.mp3" type="audio/mpeg">
    Seu navegador não suporta áudio HTML.
</audio>
```

---

# Slide 4: Elemento `<video>`

## Incorporando Vídeo em HTML

- **Uso**: O elemento `<video>` é usado para incorporar arquivos de vídeo.
- **Atributos**: `src`, `controls`, `autoplay`, `loop`, `width`, `height`.

### Exemplo Básico

```html
<video controls width="250">
    <source src="video.mp4" type="video/mp4">
    Seu navegador não suporta vídeo HTML.
</video>
```

---

# Slide 5: Formatos de Vídeo Suportados

## Compatibilidade e Formatos

- **Formatos Comuns**: MP4, WebM, OGG.
- **Importância da Compatibilidade**: Escolha formatos compatíveis com a maioria dos navegadores.

### Exemplo com Múltiplos Formatos

```html
<video controls width="500">
    <source src="video.webm" type="video/webm">
    <source src="video.mp4" type="video

/mp4">
    Seu navegador não suporta vídeo HTML.
</video>
```

---

# Slide 6: Controles de Mídia

## Personalizando a Experiência do Usuário

- **Controles**: Atributo `controls` adiciona controles padrão de reprodução.
- **Autoplay e Loop**: `autoplay` inicia a reprodução automaticamente; `loop` repete indefinidamente.

### Exemplo com Controles

```html
<video controls autoplay loop width="500">
    <source src="video.mp4" type="video/mp4">
    <!-- Conteúdo alternativo -->
</video>
```

---

# Slide 7: Incorporando Mídia Responsiva

## Adaptação a Diferentes Tamanhos de Tela

- **Design Responsivo**: Utilize CSS para garantir que o áudio e o vídeo se adaptem a diferentes tamanhos de tela.
- **Atributos de Largura e Altura**: Defina largura e altura como percentuais ou use CSS para responsividade.

### Exemplo com CSS

```html
<style>
    video {
        max-width: 100%;
        height: auto;
    }
</style>
```

---

# Slide 8: Acessibilidade em Mídia

## Tornando Mídia Acessível

- **Legendas**: Use `<track>` para adicionar legendas em vídeos.
- **Descrições de Áudio**: Forneça descrições textuais para conteúdo de áudio.

### Exemplo com Legendas

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <track src="subtitles_pt.vtt" kind="subtitles" srclang="pt" label="Português">
    <!-- Conteúdo alternativo -->
</video>
```

---

# Slide 9: Exercícios Práticos

## Colocando em Prática

1. **Incorporar um Vídeo e Áudio**: Crie uma página que inclua um vídeo e um áudio com controles.
2. **Design Responsivo**: Aplique estilos CSS para tornar a mídia responsiva.
3. **Acessibilidade**: Adicione legendas a um vídeo e descreva um arquivo de áudio.

---

# Slide 10: Conclusão

- **Importância da Mídia**: Elementos de áudio e vídeo enriquecem websites, melhorando a experiência do usuário.
- **Práticas Recomendadas**: Priorize a compatibilidade entre navegadores, responsividade e acessibilidade.
- **Exploração Criativa**: Experimente com diferentes formatos de mídia e estilos para descobrir o potencial completo desses elementos.