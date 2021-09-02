const produtos = [
  {
    id: 1,
    titulo: 'Bola de Futebol',
    descricao: 'Bola tipo dente de leite',
    preco: 190.0,
    precoPromo: 90.0,
    categoriaId: 1,
    dataLancamento: '12/31/2000',
  },
  {
    id: 2,
    titulo: 'Saia Justa',
    descricao: 'Atenção - laceia após primeira lavagem',
    preco: 290.01,
    precoPromo: 290.0,
    categoriaId: 2,
    dataLancamento: '07/13/2021',
  },
  {
    id: 3,
    titulo: 'Pente para Careca',
    descricao: 'Pra matar a saudades daquela cabeleira',
    preco: 29.99,
    precoPromo: 29.99,
    categoriaId: 3,
    dataLancamento: '07/01/2021',
  },
  {
    id: 4,
    titulo: 'Tesoura do Mickey',
    descricao: 'Eu tenho, você não tem',
    preco: 55.95,
    precoPromo: 50.95,
    categoriaId: 4,
    dataLancamento: '07/01/1996',
  },
  {
    id: 5,
    titulo: 'Papel Rascunho',
    descricao: 'Quase 100% rabiscado',
    preco: 3.79,
    precoPromo: 3.79,
    categoriaId: 4,
    dataLancamento: '07/11/2021',
  },
  {
    id: 6,
    titulo: 'Loção Embelezadora',
    descricao: 'Você fica oh! Uma belezura!',
    preco: 73.21,
    precoPromo: 3.21,
    categoriaId: 3,
    dataLancamento: '01/31/2020',
  },
  {
    id: 7,
    titulo: 'Camisa Social Esporte Fino',
    descricao: 'Ideal pra jogadores de golfe',
    preco: 46.46,
    precoPromo: 46.46,
    categoriaId: 2,
    dataLancamento: '01/10/2018',
  },
  {
    id: 8,
    titulo: 'Gol de Futebole de Botão',
    descricao: 'Acompanha rede',
    preco: 64.99,
    precoPromo: 40.99,
    categoriaId: 1,
    dataLancamento: '11/01/2021',
  },
  {
    id: 9,
    titulo: 'Borracha de Caneta',
    descricao: 'Não funciona com lápis',
    preco: 4.46,
    precoPromo: 4.06,
    categoriaId: 4,
    dataLancamento: '08/21/2008',
  },
  {
    id: 10,
    titulo: 'Carimbo "TOP SECRET"',
    descricao: 'Acompanha estojo e tinta vermelha',
    preco: 100.0,
    precoPromo: 99.99,
    categoriaId: 4,
    dataLancamento: '07/10/2021',
  },
];

const controller = {
  index: (req, res, next) => {
    res.render('produtos', {
      produtos,
      titulo: '.Com',
      subtitulo: 'Confira nossas ofertas',
    });
  },
};

module.exports = controller;
