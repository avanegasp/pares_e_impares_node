const express = require('express');
const app = express();


app.set('view engine', 'pug');
app.set('views', 'views');


app.get('/hello', (req, res) => {
  res.render('index.pug', { mensaje: 'Usando Pug JS en Express' }); // Se muestra la plantilla hello.pug
});

app.listen(3000, () => console.log('Listening on port 3000'));

// app.get('/', (req, res) => {
//   let result = "";
//   for (var i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//       result += "<p>" + i + " Soy Par!" + "</p>"
//     }else{
//       result += "<p>" + i + " Soy Impar!" + "</p>"
//     }
//   }
//   res.send(result)
// })
