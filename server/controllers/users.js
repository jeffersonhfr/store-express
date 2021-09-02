const controller = {
  index: (req, res, next) => {
    res.render('usuarios', {
      titulo: 'Produtos',
      subtitulo: 'Produtos do Jefferson',
    });
  },
};

module.exports = controller;
