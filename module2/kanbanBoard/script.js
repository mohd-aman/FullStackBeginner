let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont")
let addModal = true;

addBtn.addEventListener("click",function(){
    if(addModal){
        modal.style.display = "flex"; // show it
        addModal = false; // setting variable for next click.
    }else{
        modal.style.display = "none";// hide it
        addModal = true; // setting it for next click.
    }
})