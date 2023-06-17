let commentContainer = document.querySelector(".comment-container");

commentContainer.addEventListener('click',function(e){
    let closestCommentContainer = e.target.closest(".comment-container");

    if(e.target.classList.contains("reply")){
        console.log(e.target);
        // <div class="comment-reply-container">
            // <input placeholder="write your comment" type="text">
            // <button>reply</button>
        // </div>
        let commentReplyContainer = document.createElement("div");
        commentReplyContainer.setAttribute("class","comment-reply-container");
        commentReplyContainer.innerHTML = `<input placeholder="write your comment" type="text">
        <button class="btn-submit">submit</button>`;
        // console.log(commentReplyContainer);
        closestCommentContainer.appendChild(commentReplyContainer);
    }
    else if(e.target.classList.contains("btn-submit")){
        let closestCommentReply = e.target.closest(".comment-reply-container");
        let value = closestCommentReply.children[0].value;
        console.log(value);
                // <div class="comment-container">
                //     <div class="comment-card">
                //         <h3>Good Morning Everyone, How are you? </h3>
                //         <div class="reply">Reply</div>
                //     </div>
                // </div>
        let newComment = document.createElement("div");
        newComment.setAttribute("class","comment-container");
        newComment.innerHTML = `<div class="comment-card">
        <h3>${value} </h3>
        <div class="reply">Reply</div>
         </div>`
         closestCommentContainer.appendChild(newComment)
         closestCommentReply.remove();
    }   
})