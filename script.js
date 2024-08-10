let im=document.getElementById("img");
let bt=document.getElementById("btn");
function randomimg(){
    let filename= String(Math.floor(Math.random()*6)+1);
    im.setAttribute("src","./assest/"+filename+".jpg");
}


bt.addEventListener("click",()=>{
    setTimeout(randomimg,500);
    im.setAttribute("src","./assest/dice-roll.gif");
    

})
