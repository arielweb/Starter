function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        setInterval(function() {
            if (idade > 18) {
                resolve('tudo OK')
            } else {
                reject('erro na requisição')
            }
        }, 2000)
    })
}


checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });