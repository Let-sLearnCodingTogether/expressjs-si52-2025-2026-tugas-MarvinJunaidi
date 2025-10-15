import express from 'express';

const app = express();

app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render("index");
});

app.listen(3000, () => {
  console.log(`Server berhasil berjalan di http://localhost:3000`);
});