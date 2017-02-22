const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.set('port', (process.env.PORT || 8080));

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Ejemplo Pug.js', texto1: 'Ejemplo básico de Pug + Express', numeros: [1,2,3] });
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}`);
});
