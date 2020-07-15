var inputName = document.querySelector("input");
var dataList = document.querySelector("ul");



function repository() {
    dataList.innerHTML = ''
    var user = inputName.value
    inputName.value = ""

    loading()

    axios.get(`https://api.github.com/users/${ user }/repos`)
        .then(function(response) {
            dataList.innerHTML = ''
            listRepository(response)
        })
        .catch(function() {
            dataList.innerHTML = ''
            erroUser()
        })
}

function listRepository(dados) {
    label()
    for (const repo of dados.data) {
        var liElement = document.createElement('li')
        var text = document.createTextNode(repo.full_name)

        liElement.appendChild(text)
        dataList.appendChild(liElement)

    }
}

function erroUser() {
    var liElement = document.createElement('li')
    var text = document.createTextNode('Usuário não encontrado')

    liElement.style.color = '#f00'

    liElement.appendChild(text)
    dataList.appendChild(liElement)
}

function loading() {
    var liElement = document.createElement('li')
    var text = document.createTextNode('carregando...')

    liElement.style.color = 'rgb(33, 9, 109)'

    liElement.appendChild(text)
    dataList.appendChild(liElement)
}

function label(dados) {
    var liElement = document.createElement('li')
    var text = document.createTextNode(dados.name)

    liElement.appendChild(text)
    dataList.appendChild(liElement)
}