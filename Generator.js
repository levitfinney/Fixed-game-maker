function generateGame(){

let desc=document.getElementById("description").value.toLowerCase()

generateMap()

spawnEnemies(desc)

generateTheme(desc)

}

function spawnEnemies(desc){

enemies=[]

let count=5

if(desc.includes("army")) count=20
if(desc.includes("boss")) count=1

for(let i=0;i<count;i++){

enemies.push({
x:Math.random()*700+50,
y:Math.random()*300+50,
hp:50
})

}

}

function generateTheme(desc){

if(desc.includes("forest"))
canvas.style.background="darkgreen"

else if(desc.includes("desert"))
canvas.style.background="tan"

else if(desc.includes("space"))
canvas.style.background="black"

else
canvas.style.background="#222"

}
