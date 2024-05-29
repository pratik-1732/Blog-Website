// document
//   .getElementById("submit-comment")
//   .addEventListener("click", function () {
//     const commentInput = document.getElementById("comment-input");
//     const commentText = commentInput.value.trim();

//     if (commentText !== "") {
//       const commentList = document.getElementById("comment-list");
//       const newComment = document.createElement("div");
//       newComment.classList.add("comment");
//       newComment.innerHTML = `<p>${commentText}</p>`;
//       commentList.appendChild(newComment);

//       commentInput.value = "";
//     }
//   });

// const commentsList = document.getElementById("comments-list");
// const commentInput = document.getElementById("comment-input");

// // Function to add a comment
// function addComment() {
//   const comment = commentInput.value;
//   if (comment) {
//     db.collection("comments")
//       .add({
//         comment: comment,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//       })
//       .then(() => {
//         commentInput.value = "";
//         fetchComments();
//       });
//   }
// }

// // Function to fetch and display comments
// function fetchComments() {
//   commentsList.innerHTML = "";
//   db.collection("comments")
//     .orderBy("timestamp", "desc")
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         const commentData = doc.data();
//         const commentItem = document.createElement("div");
//         commentItem.textContent = commentData.comment;
//         commentsList.appendChild(commentItem);
//       });
//     });
// }

// // Initial fetch of comments
// fetchComments();
