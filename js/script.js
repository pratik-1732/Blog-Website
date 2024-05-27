document
  .getElementById("submit-comment")
  .addEventListener("click", function () {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
      const commentList = document.getElementById("comment-list");
      const newComment = document.createElement("div");
      newComment.classList.add("comment");
      newComment.innerHTML = `<p>${commentText}</p>`;
      commentList.appendChild(newComment);

      commentInput.value = "";
    }
  });
