let num_clientes = document.getElementById('num_clientes');
let num_produtos = document.getElementById('num_produtos');
let num_cursos = document.getElementById('num_cursos');

// Consultar a API http://localhost:3000/clientes e contar a quantidade de clientes e setar no elemento num_clientes
fetch('http://localhost:3000/clientes').then(resposta => {
    return resposta.json();
}).then(json => {
    num_clientes.innerHTML = json.length;
}).catch(erro => {
    console.log(erro);
});

fetch('http://localhost:3000/produtos').then(resposta => {
    return resposta.json();
}
).then(json => {
    num_produtos.innerHTML = json.length;
}).catch(erro => {
    console.log(erro);
});

fetch('http://localhost:3000/cursos').then(resposta => {
    return resposta.json();
}).then(json => {
    num_cursos.innerHTML = json.length;
}).catch(erro => {
    console.log(erro);
})