let name
document.getElementById("sub").onclick=function(){
    name=document.getElementById("int").value;
    document.getElementById("fir").textContent="Hello "+(name)+" nice to meet you. "
}
let age
document.getElementById("age").onclick=function(){
    age=document.getElementById("num").value;
    document.getElementById("sec").textContent="Your name is "+(name)+" You are "+(age)+"years old."
}