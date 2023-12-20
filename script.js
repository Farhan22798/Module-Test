let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let user = document.querySelector(".user");
let pulse = document.querySelector(".pulse");
let PC = document.querySelector(".PC");
let winModel = document.querySelector(".win-model");
let winner = document.querySelector(".winner");
console.log(computer);
let play=document.querySelector(".play");
let random = Math.floor(Math.random() * 3);
let lines1=document.querySelector(".lines1");
let lines2=document.querySelector(".lines2");
let lines3=document.querySelector(".lines3");

let score=JSON.parse(localStorage.getItem("sc")) || 0;
let scoreElem=document.getElementById("score");

let comscore=JSON.parse(localStorage.getItem("csc")) || 0;
let comscoreElem=document.getElementById("com-score");

let ruleBtn=document.querySelector(".btn-rule");
let rulemodel=document.querySelector(".rule-model");
let ruleimg=document.querySelector(".rule-img");

let count=0;

if(score){
    scoreElem.innerText=score;
}
if(comscore){
    comscoreElem.innerText=comscore;
}




con.forEach((element, index) => {
    element.addEventListener("click", () => {
        user.style.opacity="1";
        lines1.style.display = "none";
        lines2.style.display = "none";
        lines3.style.display = "none";

        con.forEach(item => {
            item.style.display = "none";
        });
        element.style.display="block";
        element.classList.add("show")
        setTimeout(() => {
        PC.style.opacity="1";
        setTimeout(() => {
            computer[random].style.display="block";
            computer[random].classList.add("right");
        }, -2000);
       
        }, 500);
        setTimeout(() => {
            if(random==index)
            {winModel.style.display="grid";
            winner.innerText="Tie Up";
        }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                winModel.style.display="grid";
                winner.innerText="YOU WIN \nAGAINST PC";
                count=score;
                count++;
                scoreElem.innerText=count;
                localStorage.setItem("sc", JSON.stringify(count));
               
            }else{
                winModel.style.display="grid";
                winner.innerText="YOU LOST \nAGAINST PC";
                comscore++; 
                comscoreElem.innerText=comscore;
                localStorage.setItem("csc", JSON.stringify(comscore));
               
            }
            
            
        }, 1500);
    });
});
play.addEventListener("click",()=>{
    window.location.reload();
});

   
ruleBtn.addEventListener("click",()=>{
    rulemodel.style.display="flex";
    setTimeout(() => {
    ruleimg.style.transform="translateY(0)";
}, 500);
})
let close=document.querySelector(".close");
close.addEventListener("click",()=>{
    
    ruleimg.style.transform="translateY(-200%)";
    setTimeout(() => {
        rulemodel.style.display="none";
}, 1000);
});

