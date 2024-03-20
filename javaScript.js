(() => {

    fetch('https://adopme-cursobackend-production.up.railway.app/api/pets')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        }).catch(error => console.log(error))


})()