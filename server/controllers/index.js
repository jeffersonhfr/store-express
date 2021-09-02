const controller = {
  index: (req, res, next) => {
    res.render('index', {
      titulo: '.Com',
      subtitulo: 'A sua loja na internet'
    });
  },
};

module.exports = controller;
