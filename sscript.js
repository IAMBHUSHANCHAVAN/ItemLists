const inpt = document.getElementById("inpt")
const basic = document.getElementById("basic")
const todocontainer = document.getElementById("todocontainer")
basic.addEventListener("click",function(e){
    e.preventDefault()
    let para = document.createElement("p")
    para.innerText=inpt.value
    todocontainer.appendChild(para)
    inpt.value=""
    para.addEventListener("click",function(){
        // para.style.textDecoration ="line-through"
        if(para.style.textDecoration=="line-through"){
            para.style.textDecoration="none"
        }
        else{
            para.style.textDecoration="line-through"
        }
    })
    para.addEventListener("dblclick",function(){
        todocontainer.removeChild(para)
    })
})