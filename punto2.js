console.log("Ejecución del punto dos");

var valida=0;

fetch('https://api.garantto.com/api/v1/pais')
    .then(response => response.json())
    .then(json => {
        //Rta 1
        console.log(json.length);

        json.forEach(element => {
            if(element.IdT==="COq"){
                pais(element);
                valida=1;
            } 
        });
        if(valida == 0){
            console.log("no se encuentra el registro");
        }
});

function pais(data) {
    fetch('https://api.garantto.com/api/v1/categoria?idPais= '+ data.Id  )
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



