const controller = {
  index: (req, res, next) => {
    res.render('contato', {
      titulo: '.Com',
      subtitulo: 'Contato',
    });
  },
};

module.exports = controller;
