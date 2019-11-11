const express = require('express');
const app = express();

app.set('port', processs.env.POR || 3000);

app.set('view engine','ejs');

app.listen(app.get('port'),() => {
	console.log('Escuchando en el puerto 3000');
})