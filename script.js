function getSinglePost() {
  var todoId = document.getElementById("post-id").value;

  axios
    .get(`http://localhost:3000/posts/${todoId}`)
    .then(function (response) {
      if (response.data === "") {
        alert(`ID ${todoId} cnnot be found  `);
      } else {
        //console.log(response.data);
        localStorage.setItem('postId', response.data);
        localStorage.setItem('post', JSON.stringify(response.data));
        window.location.assign("/post-detail.html")
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}


function fetchPostDetails(){
    var post = JSON.parse(localStorage.getItem('post'));
    document.getElementById("title").innerHTML = post.title; 
    document.getElementById("description").value = post.body; 
    document.getElementById("description").readOnly = true; 
}


function goBack() {
  window.history.back();
}