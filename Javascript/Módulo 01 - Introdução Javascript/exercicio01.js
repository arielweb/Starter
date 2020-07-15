var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function dados(dado) {
    return 'O usuário mora em ' + dado.cidade + " / " + dado.uf + ", no bairro " + dado.bairro + ', na rua "' + dado.rua + '" com nº ' + dado.numero
}

console.log(dados(endereco))