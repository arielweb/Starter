var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills) {
    return skills.indexOf('Javascript') == 0
}

var dado = temHabilidade(skills); // true ou false

console.log(dado)