let gameForm = document.getElementById("game-start-form");
let timeDuration = document.getElementById("duration");
let sCountNumber = document.getElementById("scount");
let lCountNumber = document.getElementById("lcount");
let sCountWin = document.getElementById("scountWinner");
let lCountWin = document.getElementById("lcountWinner");
let restartButton = document.getElementById("restart");
let sCount = 0;
let lCount = 0;
document.addEventListener("keydown", keyCount);
function keyCount(event)
 {
    if (timeDuration.value > 0) {
        if(event.code === "KeyL"){
            lCount++;
            lCountNumber.innerHTML = lCount;
            lCountWin.innerHTML = ""; 
            sCountWin.innerHTML = "";
        }
        if(event.code === "KeyS"){
            sCount++;
            sCountNumber.innerHTML = sCount;
            lCountWin.innerHTML = ""; 
            sCountWin.innerHTML = "";
        }
    }
}
gameForm.addEventListener("click",(event)=>{
    if (timeDuration.value <= 0) {    
        return;
    }
        let secs = 0;
        let id = setInterval(function() { 
                secs++; 
                console.log(secs);
                if (secs >= 1){
                   if (sCount === 0 && lCount === 0){
                    sCountWin.innerHTML = "Game start please press S";
                    lCountWin.innerHTML = "Game start please press L"; 
                   }
                 }
                if(secs == timeDuration.value){
                    clearInterval(id);
                    if (sCount>lCount){
                       sCountWin.innerHTML = "Winner";
                       confettiS = new ConfettiGenerator({ target: 'confettiS', width: 600, height: 100 });
                       confettiS.render();
                    }
                    else if (sCount<lCount){
                        lCountWin.innerHTML = "Winner";
                        confettiL = new ConfettiGenerator({ target: 'confettiL', width: 600, height: 100 });
                        confettiL.render();
                    }
                    else{
                        sCountWin.innerHTML = "Tie";
                        lCountWin.innerHTML = "Tie";
                    }              
                    restartButton.disabled=false;
                    document.removeEventListener("keydown", keyCount); 
                }
                }, 1000); 
});
restartButton.addEventListener("click", (restartTheGame) =>{
    document.location.href = "";
});