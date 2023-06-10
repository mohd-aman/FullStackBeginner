let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removeBtn = document.querySelector(".remove-btn");

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

        createTicket();
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
})
}


function createTicket(){

{/* <div class="ticket-cont">
    <div class="ticket-color green"></div>
    <div class="ticket-id">#eidut3</div>
    <div class="ticket-area">Some Task</div>
</div> */}

    let ticketCont = document.createElement('div');
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color green"></div>
                            <div class="ticket-id">#eidut3</div>
                            <div class="ticket-area">Some Task</div>`
    // console.log(ticketCont)
    mainCont.append(ticketCont);

    //handle delete of ticket
    ticketCont.addEventListener("click",function(){
        if(removeFlag)
            ticketCont.remove();
    })
}