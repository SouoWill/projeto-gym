function enviarWhatsApp() {
    // Número de destino
    const telefoneDestino = "5581981358214";

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefoneCliente = document.getElementById('telefone').value;
    const modalidade = document.getElementById('modalidade').value;

    if (!nome || !email || !telefoneCliente) {
        alert("Por favor, preencha todos os campos antes de agendar.");
        return;
    }

    const texto = `Olá! Gostaria de agendar um treino experimental.\n*Nome:* ${nome}\n*Modalidade:* ${modalidade}\n*E-mail:* ${email}\n*Telefone de contato:* ${telefoneCliente}`;

    // Codifica o texto para URL
    const textoCodificado = encodeURIComponent(texto);

    // Monta o link final
    const url = `https://wa.me/${telefoneDestino}?text=${textoCodificado}`;

    // Abre em uma nova aba
    window.open(url, '_blank');
}