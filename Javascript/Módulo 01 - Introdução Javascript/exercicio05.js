var usuarios = [{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function habilidade(dados) {
    for (const dado of dados) {
        return "O " + dado.nome + " possui as habilidades: " + dado.habilidades.join(', ')
    }
}

console.log(habilidade(usuarios))