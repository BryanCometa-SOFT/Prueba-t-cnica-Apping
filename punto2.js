console.log("Ejecución del punto dos");

fetch('https://api.garantto.com/api/v1/pais')
    .then(response => response.json())
    .then(json => {
        //Rta 1
        console.log(json.length);

        json.forEach(element => {
            if(element.IdT==="CO"){
                pais(element.Id);
            }
        }
    );
});

function pais(idPais) {
    if(idPais == null || idPais === undefined ){
        console.log("no se encuentra el registro");
    }else{
        fetch('https://api.garantto.com/api/v1/categoria?idPais= '+ idPais  )
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                element.Hijos.forEach(elementHijo => {
                    if(elementHijo.IdT === "Televisor" || elementHijo.IdT === "Carro"){
                        //Rta 2
                        console.log(element.Descripcion);
                        return;
                    }
                });
            });
        });
    }
}



