const controller = {
  index: (req, res, next) => {
    res.render('produtos', {
      titulo: 'Produtos',
      subtitulo: 'Produtos do Jefferson',
    });
  },
};

module.exports = controller;
