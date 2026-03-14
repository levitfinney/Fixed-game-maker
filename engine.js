const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height = 400

let player={
x:100,
y:200,
hp:100,
speed:5,

draw(){
ctx.fillStyle="cyan"
ctx.fillRect(this.x,this.y,20,20)
}
}

let enemies=[]
let map=[]

function drawEnemies(){

enemies.forEach(e=>{
ctx.fillStyle="red"
ctx.fillRect(e.x,e.y,20,20)
})

}

function gameLoop(){

ctx.clearRect(0,0,canvas.width,canvas.height)

drawMap()

player.draw()

drawEnemies()

requestAnimationFrame(gameLoop)

}

gameLoop()

document.addEventListener("keydown",e=>{

if(e.key==="w") player.y-=player.speed
if(e.key==="s") player.y+=player.speed
if(e.key==="a") player.x-=player.speed
if(e.key==="d") player.x+=player.speed

})
