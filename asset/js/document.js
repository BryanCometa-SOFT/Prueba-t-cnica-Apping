fetch('https://api.garantto.com/api/v1/pais')
      .then(response => response.json())
      .then(json => console.log(json))


