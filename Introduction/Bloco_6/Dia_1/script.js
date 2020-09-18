window.onload = function () {
    carregaEstados();
    materializecssInitialization()
}

function materializecssInitialization() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
}


function carregaEstados() {
    let estados = {
        'AC': 'Acre',
        'AL': 'Alagoas',
        'AP': 'Amapá',
        'AM': 'Amazonas',
        'BA': 'Bahia',
        'CE': 'Ceará',
        'DF': 'Distrito Federal',
        'ES': 'Espírito Santo',
        'GO': 'Goiás',
        'MA': 'Maranhão',
        'MT': 'Mato Grosso',
        'MS': 'Mato Grosso do Sul',
        'MG': 'Minas Gerais',
        'PA': 'Pará',
        'PB': 'Paraíba',
        'PR': 'Paraná',
        'PE': 'Pernambuco',
        'PI': 'Piauí',
        'RJ': 'Rio de Janeiro',
        'RN': 'Rio Grande do Norte',
        'RS': 'Rio Grande do Sul',
        'RO': 'Rondônia',
        'RR': 'Roraima',
        'SC': 'Santa Catarina',
        'SP': 'São Paulo',
        'SE': 'Sergipe',
        'TO': 'Tocantins'
    }
    let selectEstados = document.getElementById("input-estado");
    for (let sigla in estados) {
        let novoEstado = document.createElement("option");
        novoEstado.innerText = estados[sigla];
        novoEstado.value = sigla;
        selectEstados.appendChild(novoEstado);
        materializecssInitialization();
    }

}

let botaoEnviar = document.getElementById("send-button");
botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault();
})