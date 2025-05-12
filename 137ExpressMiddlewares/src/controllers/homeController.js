exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente');
    res.render('index');
    // return;
    console.log(`'PAGINA INICIAL' Olha o que tem na req.session.nome ${req.session.nome}`);
    next();
}

exports.trataPost = (req, res, next) => {
    res.send('Rota post acionada');
    return; // não é possível utilizar nenum middleware apois o return
}