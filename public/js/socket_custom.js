var socket = io();
/* Los socket.on sirven para escuchar al servidor */
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
})

/* los .emit sirven para enviar información al servidor */
/* el primer argumento es el nombre del evento, le sigue el objeto que queremos enviar y el tercero es el callback */
socket.emit('enviarMensaje', {
    usuario: 'Enzo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});

/* Escuchamos un mensaje del servidor que creamos */
socket.on('enviarMensaje', function(datos) {
    console.log(datos);
})