// smooth scroll

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

})

})

})


// animated code editor

const code = `

const developer = {
 name:"MMT",
 role:"Web Developer",
 experience:"3+ years",
 skills:["HTML","CSS","JavaScript","Python"],
 service:"Minecraft VPS Hosting"
}

function buildFuture(){
 return "Creating futuristic web experiences..."
}

console.log(buildFuture())

`

let i=0
const codeElement=document.getElementById("code")

function typeCode(){

if(i<code.length){

codeElement.textContent+=code.charAt(i)
i++

setTimeout(typeCode,25)

}

}

typeCode()


// simple chatbot

const input=document.getElementById("chatInput")
const chatbox=document.getElementById("chatbox")

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

let msg=input.value

chatbox.innerHTML+="<p><b>You:</b> "+msg+"</p>"
chatbox.innerHTML+="<p><b>AI:</b> I'm your portfolio assistant.</p>"

input.value=""

}

})