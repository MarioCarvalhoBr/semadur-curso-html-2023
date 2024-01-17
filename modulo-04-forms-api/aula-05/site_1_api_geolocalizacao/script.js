// Entrada 
var botao_obter = document.getElementById('botao_obter');

// Processamento e Saída
botao_obter.onclick = function obter_localizacao() {
    // Se o navegador não suportar a geolocalização
    if (!navigator.geolocation) {
        alert('Seu navegador não suporta geolocalização');
        return;
    }

    // Se o navegador suportar a geolocalização
    navigator.geolocation.getCurrentPosition(function (posicao) {
        // Saída
        var div_dados = document.getElementById('dados');
        div_dados.innerHTML = 'Latitude: ' + posicao.coords.latitude + '<br>';
        div_dados.innerHTML += 'Longitude: ' + posicao.coords.longitude + '<br>';
        div_dados.innerHTML += 'Precisão: ' + posicao.coords.accuracy + '<br>';
        div_dados.innerHTML += 'Altitude: ' + posicao.coords.altitude + '<br>';

    });
}