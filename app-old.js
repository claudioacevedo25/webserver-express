
//este paquete HTTP ya viene por defecto en node
const http = require('http');

//crear el servidor para poder escuchar peticiones http
http.createServer ( (req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'claudio',
        edad: 32,
        url: req.url
    }


    res.write(JSON.stringify(salida))
    
    res.write('hola mundo')
    res.end();

})

.listen(8080);

console.log('escuchando el puerto 8080');