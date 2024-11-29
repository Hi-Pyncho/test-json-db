const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ readOnly: true });
const port = process.env.PORT || 3000;

server.get('/new-promocode', (req, res) => {
  res.status(200).json({ promocodes: [] });
});
server.use(middlewares);
server.use(router);

server.listen(port);
console.log('JSON Server is running');
