function generateMap(){

map=[]

for(let y=0;y<20;y++){

let row=[]

for(let x=0;x<40;x++){

if(Math.random()<0.15)
row.push("wall")
else
row.push("floor")

}

map.push(row)

}

}

function drawMap(){

for(let y=0;y<map.length;y++){

for(let x=0;x<map[y].length;x++){

if(map[y][x]=="wall")
ctx.fillStyle="darkgray"
else
ctx.fillStyle="#333"

ctx.fillRect(x*20,y*20,20,20)

}

}

}
