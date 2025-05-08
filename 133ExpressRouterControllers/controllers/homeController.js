exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        Outro campo: <input type="text" name="outroCampo">
        <button>Enviar</button>
        </form>
        `);
}

exports.trataPost = (req, res) => {
    res.send('Rota post acionada');
}