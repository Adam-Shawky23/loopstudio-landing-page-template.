const ham = document.getElementById("ham")
const sec = document.getElementById("sec")
const x = document.getElementById("close")

ham.addEventListener("click",()=>{
    ham.style.display = "none"
    sec.style.display = "flex"
})
x.addEventListener("click",()=>{
    ham.style.display = "block"
    sec.style.display =  "none"
})
