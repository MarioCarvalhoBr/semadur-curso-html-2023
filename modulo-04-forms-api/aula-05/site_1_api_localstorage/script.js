var texto_tarefa = document.getElementById('tarefa');
var botao_adicionar = document.getElementById('adicionar');
var lista_tarefas = document.getElementById('lista_tarefas');

// Local storage lista
var lista = [];


botao_adicionar.onclick = function adicionar_tarefa() {
    // Entrada
    var tarefa = texto_tarefa.value;

    // Processamento
    lista.push(tarefa);
    localStorage.setItem('lista', JSON.stringify(lista));

    // Saída
    atualizar_lista();

    // Limpar o campo de texto
    texto_tarefa.value = '';
}

function atualizar_lista() {
    // Limpar a lista
    lista_tarefas.innerHTML = '';

  // Recurar a lista do local storage e inserir na div lista_tarefas
  lista = JSON.parse(localStorage.getItem('lista'));
  // Verificar se a lista está vazia ou null
  if (lista == null || lista == '') {
     // Imprimir lista vazia
      var item_lista = document.createElement('h5');
      item_lista.innerHTML = 'Lista vazia';
      lista_tarefas.appendChild(item_lista);
      lista = [];
      return;
  }
  for (var i = 0; i < lista.length; i++) {
      var item_lista = document.createElement('li');
      item_lista.innerHTML = lista[i];
      lista_tarefas.appendChild(item_lista);
  }
}

atualizar_lista();

