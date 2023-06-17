let starContainer = document.querySelector(".star-container");
let allStars = document.querySelectorAll(".star");
let rating = document.querySelector("h3");

let prevClicked = 0;


starContainer.addEventListener("click",function(e){
    // console.log(e.target);
    // console.log(e.target.dataset.pos);
    let currentSelected = e.target.dataset.pos;

    for(let i=0;i<prevClicked;i++){
        allStars[i].classList.remove("gold");
    }

    for(let i=0;i<currentSelected;i++){
        allStars[i].classList.add("gold");
    }

    rating.innerText = "Rating : " + currentSelected;

    prevClicked = currentSelected;
})

starContainer.addEventListener("mouseover",function(e){
    let currentSelected = e.target.dataset.pos;
    console.log(currentSelected);
    for(let i=0;i<allStars.length;i++){
        if(allStars[i].classList.contains("gold"))
            allStars[i].classList.remove("gold")
    }

    for(let i=0;i<currentSelected;i++){
        allStars[i].classList.add("gold");
    }
})

starContainer.addEventListener("mouseleave",function(){
    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove("gold");
    }
    
    for(let i=0;i<prevClicked;i++){
        allStars[i].classList.add("gold");
    }
})