async function askAI(){

let prompt=document.getElementById("prompt").value

let response=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[
{role:"system",content:"You generate JavaScript game systems."},
{role:"user",content:prompt}
]

})

})

let data=await response.json()

document.getElementById("output").textContent=
data.choices[0].message.content

}
