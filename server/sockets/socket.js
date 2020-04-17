const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');


    client.emit('enviarMensaje', {
        nombre: 'Servidor',
        mensaje: 'El servidor te saluda!'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        /* Con broadcast envia el mensaje a todos los clientes conectados a la app */
        client.broadcast.emit('enviarMensaje', data);


        /*if (mensaje.usuario) {
            callback({
                resp: 'Todo salió bien'
            })
        } else {
            callback({
                resp: 'TODO SALIO MALANDROOOOOOO'
            })
        } */

    })
})