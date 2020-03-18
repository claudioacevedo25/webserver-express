
//esta libreria de node sustituye a lo creado en app.js
const express = require('express');
const app = express();


const hbs = require('hbs');
require('./hbs/helpers');//con esto importo los helpers


const port = process.env.PORT || 3000; 

// middleware es un callback que se va a ejecutar siempre, no importa que url se pida
//se puede definir una carpeta publica y utilizar ahi cualquier cantidad de archivos
app.use(express.static( __dirname + '/public'));

//express HBS engine
hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs')




//SI COLOCAMOS LA LINEA DE ARRIBA NO ES NECESARIO ESTO QUE SIGUE A CONTINUACION PORQUE LO 'PISARIA'
// app.get('/', (req, res) => {
//     // res.send('Hello world');
//     let salida = {
//         nombre: 'claudio',
//         edad: 32,
//         url: req.url
//     }

//     res.send(salida)
// });


//se crea un mmetodo para cada peticion de la URL
app.get('/', (req, res) => {
    
  res.render('home', {
      //este objeto contiene las variabes que se van a compartir con los views
      nombre: 'cLaudio mAXimiLiAno',
  });
});


app.get('/about', (req, res) => {
    
    res.render('about', {
    });
  });


app.listen(port, () => {
    console.log(`escuchando petisiones en el puerto ${port}`);
});