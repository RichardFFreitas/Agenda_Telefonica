const form = document.getElementById('form-telefones');
const imgTelefone = '<img src="./imagens/telefone.png" alt="telefone de mesa" />';
const imgCelular = '<img src="./imagens/whatsapp.png" alt="logo do whatsapp" />';



let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
});

function adicionaLinha() 
{
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    

    let numeroContato = inputNumeroContato.value;
    let isTelefone = numeroContato.length === 8;
    let isCelular = numeroContato.length === 11;

    let tipoContato = '';

    if (isTelefone) {
        tipoContato = imgTelefone;
    } else if (isCelular) {
        tipoContato = imgCelular;
    }

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${numeroContato}</td>`;
    linha += `<td>${tipoContato}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';

    quantidadeDeContatos++;

    const quantContato = document.getElementById('QuantContato');
    quantContato.textcontent = quantidadeDeContatos; 
}

