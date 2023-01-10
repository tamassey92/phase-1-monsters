fetch("http://localhost:3000/monsters")
.then(resp => resp.json())
.then(monster => displayMonsters(monster))

function displayMonsters(monsters) {
    const monsterContainer = document.getElementById('monster-container')
    const h2 = document.createElement('h2')
    h2.innerText = monsters.name;
    monsterContainer.append(h2);
}