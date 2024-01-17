# Slide 1: Introdução às APIs de HTML5

## Potencializando a Interatividade Web

- **Contexto**: APIs de HTML5 fornecem funcionalidades poderosas para interações ricas na web.
- **Exemplos**: Geolocalização, Drag and Drop, Canvas, Web Storage, entre outros.

### Objetivo

- Explorar como essas APIs podem ser usadas para melhorar a experiência do usuário.

---

# Slide 2: API de Geolocalização

## Localização do Usuário em Tempo Real

- **Uso**: Permite que web apps obtenham a localização geográfica do usuário.
- **Aplicações**: Mapas, serviços baseados em localização.

### Exemplo de Geolocalização

```javascript
navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
});
```

---

# Slide 3: API de Drag and Drop

## Interatividade com Arrastar e Soltar

- **Conceito**: Permite que os usuários arrastem e soltem elementos na página.
- **Uso**: Upload de arquivos, reorganização de elementos.

### Exemplo de Drag and Drop

```html
<div id="dropZone" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
```

```javascript
function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    // Lógica para manipulação do elemento solto
}
```

---

# Slide 4: API Canvas

## Desenho e Animação

- **Uso**: Permite desenhar gráficos 2D e animações.
- **Flexibilidade**: Criação de jogos, visualizações de dados, efeitos gráficos.

### Exemplo de Canvas

```html
<canvas id="myCanvas"></canvas>
```

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 50, 50);
```

---

# Slide 5: Web Storage API

## Armazenamento Local no Navegador

- **Local Storage e Session Storage**: Armazenamento de dados no lado do cliente.
- **Uso**: Salvar preferências do usuário, dados de sessão.

### Exemplo de Web Storage

```javascript
localStorage.setItem("nome", "Alice");
alert(localStorage.getItem("nome"));
```

---

# Slide 6: API de Histórico

## Manipulação do Histórico de Navegação

- **Uso**: Gerenciar o histórico da sessão do navegador.
- **Aplicações**: Navegação de páginas sem recarregar, aplicações de página única (SPA).

### Exemplo de Histórico

```javascript
history.pushState({page: 1}, "titulo", "?page=1");
```

---

# Slide 7: API de Áudio e Vídeo

## Mídia Integrada e Controlável

- **Controles de Mídia**: Programação de controles para áudio e vídeo.
- **Uso**: Customização de players, controle programático de mídia.

### Exemplo de Controle de Vídeo

```html
<video id="meuVideo" src="filme.mp4"></video>
<button onclick="document.getElementById('meuVideo').play()">Play</button>
```

---

# Slide 8: API de Formulários

## Validação e Controle de Formulários

- **Validação**: Uso de novos tipos de input e atributos para validação nativa.
- **Uso**: Melhoria na coleta e validação de dados de formulário.

### Exemplo de Formulário com Validação

```html
<input type="email" required>
```

---

# Slide 9: Exercícios Práticos

## Aplicando os Conceitos

1. **Geolocalização na Prática**: Crie uma aplicação que mostre a localização atual do usuário.
2. **Drag and Drop**: Implemente uma interface para upload de arquivos com arrastar e soltar.
3. **Customização de Canvas**: Desenhe gráficos ou crie uma pequena animação.

---

# Slide 10: Conclusão

- **Ampliando a Interatividade**: As APIs

 de HTML5 abrem um leque de possibilidades para criar experiências de usuário ricas e interativas.
- **Exploração e Inovação**: Incentive a experimentação com estas APIs para descobrir novas formas de engajamento e funcionalidade na web.
- **Desenvolvimento Contínuo**: Mantenha-se atualizado com as evoluções das APIs e práticas recomendadas.