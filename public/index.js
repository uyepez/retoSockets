const socket = io();

// Escuchando el evento 'diego'
socket.on("productos", data => {
    console.log("data cliente: ",data);

    data.forEach(producto => {
        console.log(producto.title);

        var tr = `<tr>
          <td>`+ producto.title + `</td>
          <td>`+ producto.price + `</td>
          <td><img src="`+ producto.thumbnail + `" alt="" height="60px"></td>
        </tr>`;
        $("#cuerpoTabla").append(tr)
    });
    //$("#chat").append(data + "<br>")
})


//post de formulario
$("#productoForm").submit(e =>{
    e.preventDefault();

    const producto = {
        title: $("#title").val(),
        price: $("#price").val(),
        thumbnail: $("#thumbnail").val()
    }

    socket.emit('new-product', producto);
    $('#productoForm')[0].reset()
    nuevaFoto()
    return false;
})



function nuevaFoto() {
    //URL de imagenes
    const listaImagenes = [
        { foto: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/019_-_Star-128.png" },
        { foto: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/006_-_Present-128.png" },
        { foto: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/025_-_Mince_Pie-128.png" },
        { foto: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/018_-_Candle-128.png" },
        { foto: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/007_-_Present-128.png" },
        { foto: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/015_-_Stocking-128.png" },
        { foto: "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/59/026_-_Baubles-128.png" }
    ]
    
    const randomElement = listaImagenes[Math.floor(Math.random() * listaImagenes.length)];
    $('#thumbnail').val(randomElement.foto)
    $('#imgFoto').attr("src", randomElement.foto);
    
}

nuevaFoto()