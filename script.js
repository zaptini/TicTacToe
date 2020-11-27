document.body.style.fontSize="90px"
document.body.style.color="white"
const h1=document.querySelector('h1')
h1.style.backgroundColor="white"
const laukos=document.querySelectorAll('.lauks')
const c1=document.querySelector(".c1")
const c2=document.querySelector(".c2")
const c3=document.querySelector(".c3")
const c4=document.querySelector(".c4")
const c5=document.querySelector(".c5")
const c6=document.querySelector(".c6")
const c7=document.querySelector(".c7")
const c8=document.querySelector(".c8")
const c9=document.querySelector(".c9")
const board=["","","","","","","",""]
let address1=0
let gameOver='false'
const poga=document.querySelector('button')
const board1 = {
    c1:"55",
    c2:"66",
    c3:"77",
    c4:"88",
    c5:"99",
    c6:"11",
    c7:"12",
    c8:"61",
    c9:"23",
}

for (laukas of laukos) {
    laukas.addEventListener('click', boom)
}

for (laukz of laukos) {
    laukz.style.paddingLeft="50px"
    laukz.addEventListener('dblclick', boom1)
    
}

function boom() {
    this.textContent="x"
    address1=this.classList[1];
    board1[address1]=this.textContent
    win()
}
function boom1() {
    this.textContent="o"
    address1=this.classList[1];
    board1[address1]=this.textContent
    win()
}




function win() {
    if (((board1.c1==board1.c2)&&(board1.c2==board1.c3))||
    ((board1.c4==board1.c5)&&(board1.c5==board1.c6))||
    ((board1.c7==board1.c8)&&(board1.c8==board1.c9))||
    ((board1.c1==board1.c4)&&(board1.c4==board1.c7))||
    ((board1.c2==board1.c5)&&(board1.c5==board1.c8))||
    ((board1.c3==board1.c6)&&(board1.c6==board1.c9))||
    ((board1.c1==board1.c5)&&(board1.c5==board1.c9))||
    ((board1.c3==board1.c5)&&(board1.c5==board1.c7))){

    alert("Uzvara!!!")
    window.location.reload();
    }
}

for (epic of laukos) {
    this.addEventListener('click',win),
    this.addEventListener('doubleclick',win)
}