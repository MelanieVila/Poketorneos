let url = "../js/tipoagua.json"
let datos = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data.tipoagua
        console.log(datos)

        let cad = `<div class="container"></div>`

        for (tipoagua of datos) {
            cad += `<div class="tarjeta">
            <img src="${tipoagua.img}" alt="${tipoagua.nombre}">
            <div class="cuerpo">
                <h4>${tipoagua.numero} - ${tipoagua.nombre}</h4>
                <p>${tipoagua.region}</p>
            </div>
        </div>`
        }

        console.log(cad)

        document.getElementById("tarjeta").innerHTML = cad;

    }
    );