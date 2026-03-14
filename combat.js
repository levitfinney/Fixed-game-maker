player.attack=function(){

let damage=Math.floor(Math.random()*20)

enemies.forEach(e=>{

let dx=e.x-player.x
let dy=e.y-player.y
let dist=Math.sqrt(dx*dx+dy*dy)

if(dist<50){
e.hp-=damage
}

})

}

player.dodge=function(){

player.x+=Math.random()*80-40
player.y+=Math.random()*80-40

}

player.special=function(){

enemies.forEach(e=>{
e.hp-=50
})

}
