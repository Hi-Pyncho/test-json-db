const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(':memory:');
const db = new sqlite3.Database('./sqlite.db');

db.serialize(() => {
  db.run("SELECT * FROM demo");

  db.each("SELECT * FROM demo", (err, row) => {
    console.log(row);
  });
});
// db.serialize(() => {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//     console.log(row.id + ": " + row.info);
//   });
// });

db.close();
