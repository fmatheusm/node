exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelMiddlewareQueVaiParaTodasAsRotas = 'Va riavel do middleware';
    next();
};