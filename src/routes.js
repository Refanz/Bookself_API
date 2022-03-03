const { addBookHandler, getAllBooksHandler, getDetailsBookWithIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: getDetailsBookWithIdHandler,
  },
];

module.exports = routes;
