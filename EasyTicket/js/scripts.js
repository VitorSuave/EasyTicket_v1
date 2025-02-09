// Função para enviar dados do show para a página de confirmação
function selecionarShow(nome, local, data, horario, tipo) {
    // Salva os dados no localStorage
    localStorage.setItem('showSelecionado', JSON.stringify({
        nome: nome,
        local: local,
        data: data,
        horario: horario,
        tipo: tipo
    }));
    
    // Redireciona para a confirmação
    window.location.href = "confirmacao.html";
}

// Função para exibir os dados do show na confirmação
function exibirDetalhesShow() {
    const show = JSON.parse(localStorage.getItem('showSelecionado'));
    
    document.getElementById('nomeShow').textContent = show.nome;
    document.getElementById('localShow').textContent = show.local;
    document.getElementById('dataShow').textContent = show.data;
    document.getElementById('horarioShow').textContent = show.horario; 
    document.getElementById('tipoIngresso').textContent = show.tipo;
}

// Função para simular o desaparecimento do QR Code após 10s
function simularPagamento() {
    const qrCode = document.getElementById('qrCode');
    const confirmacao = document.getElementById('confirmacaoPagamento');

    setTimeout(() => {
        qrCode.style.display = 'none';
        confirmacao.style.display = 'block';
    }, 5000); // 5 segundos
}

// Executa as funções conforme a página
if (window.location.pathname.includes("confirmacao.html")) {
    exibirDetalhesShow();
    processarCompra();
}

if (window.location.pathname.includes("pagamento.html")) {
    simularPagamento();
}