//clase para control de lista de productos
class controlProductos {
    constructor() {
        this.productos = []
    }

    getById(id) {

        let producto = this.productos.find(function (item) {
            return item.id === parseInt(id);
        });
        // si encuentra el objeto regresa los datos en caso contrario err
        if (producto) {
            return producto
        } else {
            return false
        }

    }

    nuevo(producto) {

        let productosIds = this.productos.map(item => item.id);
        // crea nuevo Id
        let newId = productosIds.length > 0 ? Math.max.apply(Math, productosIds) + 1 : 1;
        producto.id = parseInt(newId);
        this.productos.push(producto);
        return producto;

    }

    update(producto) {
        //busca id de producto a actualizar
        let IdproductoExistente = this.productos.find(function (item) {
            return item.id === parseInt(producto.id);
        });

        if (IdproductoExistente) {

            let productoAnterior = this.productos.indexOf(IdproductoExistente) //busca producto existente

            //reemplaza el viejo por el nuevo
            this.productos.splice(productoAnterior, 1, producto);
            //regresa producto
            return producto;

        } else {
            return "id no encontrado";
        }
    }

    delete(id) {
        //busca id de producto a actualizar
        let IdproductoExistente = this.productos.find(function (item) {
            return item.id === parseInt(id);
        });

        if (IdproductoExistente) {

            let productoBorrar = this.productos.indexOf(IdproductoExistente) //busca producto existente

            //reemplaza el viejo por el nuevo
            this.productos.splice(productoBorrar, 1);
            //regresa producto
            return true;

        } else {
            return "id no encontrado";
        }
    }
}

module.exports = controlProductos