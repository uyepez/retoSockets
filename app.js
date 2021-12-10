const  express = require('express')
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require('socket.io')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const Productos = require('./productos.js')

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', './views')
app.set('view engine', 'ejs');

const listaProductos = new Productos()

//index vista de formulario
app.get('/', function (req, res) {
    res.render('layouts/index')
})

app.get('/lista', function (req, res) {
    res.render('layouts/lista')
})

//listen 
httpServer.listen(3000, function(){
    console.log('3000 es mi puerto');
})


io.on('connection', (socket) => {
    //emite lista de productos
    socket.emit('productos', listaProductos.productos)

    // escucha registro de productos
    socket.on("new-product", data => {
        const ultimoProducto = listaProductos.nuevo(data);
        console.log("data: ",data);
        io.sockets.emit("productos", [data])
    })

})