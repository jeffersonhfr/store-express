const controller = {
  index: (req, res, next) => {
    res.render('sobre', {
      titulo: '.Com',
      subtitulo: 'Sobre a Empresa',
    });
  },
};

module.exports = controller;
