let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removeBtn = document.querySelector(".remove-btn");

let color = ["red","blue","green","black"];
let modalPriorityColor = "black";
var uid = new ShortUniqueId();

let addModal = true;
let removeFlag = false;

addBtn.addEventListener("click",function(){
    if(addModal){
        modal.style.display = "flex"; // show it
        addModal = false; // setting variable for next click.
    }else{
        modal.style.display = "none";// hide it
        addModal = true; // setting it for next click.
    }
})

removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color = "black";
        removeFlag = false;
    }else{
        removeBtn.style.color = "red";
        removeFlag = true;
    }
})

textArea.addEventListener("keydown",function(e){
    // console.log(e);
    let key = e.key;
    if(key == "Enter"){
        // console.log(task);
        let task = textArea.value;
        createTicket(task);
        textArea.value = "";
        modal.style.display = "none";
        addModal = true
    }
})


for(let i=0;i<allPriorityColor.length;i++){
allPriorityColor[i].addEventListener("click",function(){
        for(let j=0;j<allPriorityColor.length;j++){
            if(allPriorityColor[j].classList.contains("active")){
                allPriorityColor[j].classList.remove("active");
            }
        }
        allPriorityColor[i].classList.add("active");
        // console.log(allPriorityColor[i]);
        // console.log(allPriorityColor[i].classList);
        modalPriorityColor = allPriorityColor[i].classList[1];
        // console.log(modalPriorityColor);
})
}


function createTicket(task){

    let id = uid();
{/* <div class="ticket-cont">
    <div class="ticket-color green"></div>
    <div class="ticket-id">#eidut3</div>
    <div class="ticket-area">Some Task</div>
</div> */}

    let ticketCont = document.createElement('div');
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color ${modalPriorityColor}"></div>
                            <div class="ticket-id">#${id}</div>
                            <div class="ticket-area">${task}</div>
                            <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`
    // console.log(ticketCont)
    mainCont.append(ticketCont);

    //handle delete of ticket
    ticketCont.addEventListener("click",function(){
        if(removeFlag)
            ticketCont.remove();
    })

    //handle priority Color change
    let ticketColor = ticketCont.querySelector(".ticket-color");
    
    ticketColor.addEventListener("click",function(){
        // console.log(ticketColor);
        // console.log(ticketColor.classList[1]);
        let currentColor = ticketColor.classList[1];
        let currentColorIndex = color.findIndex(function(col){
            return col == currentColor;
        });

        // for(let i=0;i<color.length;i++){
        //     if(color[i] == currentColor){
        //         currentColorIndex = i;
        //         break;
        //     }
        // }
        // console.log(currentColorIndex);
        // ["red","blue","green","black"]
        // [   0,     1,      2,     3]
        let nextColorIndex = (currentColorIndex+1)%color.length;
        let nextColor = color[nextColorIndex];
        console.log(nextColor);
        ticketColor.classList.remove(currentColor);
        ticketColor.classList.add(nextColor);
    })

    //handle lock and unlock icon
    let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
    let taskArea = ticketCont.querySelector(".ticket-area");

    lockUnlockBtn.addEventListener("click",function(){
        console.log(lockUnlockBtn);
        if(lockUnlockBtn.classList.contains("fa-lock")){
            lockUnlockBtn.classList.remove("fa-lock");
            lockUnlockBtn.classList.add("fa-lock-open");
            taskArea.setAttribute("contenteditable","true");
        }else{
            lockUnlockBtn.classList.remove("fa-lock-open");
            lockUnlockBtn.classList.add("fa-lock");
            taskArea.setAttribute("contenteditable","false");
        }
    })
}