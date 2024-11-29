const MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://rr-user:348912@promocodes-db-pyncho.db-msk0.amvera.tech';
const client = new MongoClient(url);

client.connect().then(mongoClient=>{
  console.log("Подключение установлено");
  console.log(mongoClient.options.dbName); // получаем имя базы данных
});
