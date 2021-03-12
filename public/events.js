 document.addEventListener('DOMContentLoaded', () => {
const getKittenImg = async () => {
    let loader = document.querySelector(".loader")
    loader.innerHTML = "Loading..."

  const res = await fetch("/kitten/image");
  const json = await res.json();
  let catImg = document.querySelector(".cat-pic");

    if (res.ok) {
        loader.innerHTML =null;
        console.log(res);
        catImg.src = json.src;
      } else {
          alert("Something went wrong! Please try again!")
      }

let upvote = document.getElementById("upvote");
let downvote = document.getElementById("downvote");

upvote.addEventListener("click", async (e) => {
    e.preventDefault();
    let counter = document.querySelector('.score')
    let score = await kittenUpvote()
    counter.innerHTML= score
})

 async function kittenUpvote() {
    const res = await fetch("/kitten/upvote", {
      method: "PATCH",
});
    const json = await res.json()
    console.log(json.score)
    return json.score
 }

kittenUpvote()

//   console.log(catImg.src);


 }
getKittenImg();

const updateKitten = document.getElementById("new-pic");

updateKitten.addEventListener("click", getKittenImg);


})




async function updateKittenFunc(e) {
    const res = await fetch("/kitten/image");
    const json = await res.json();
    let catImg = document.querySelector(".cat-pic");
     if (res.ok) {
       console.log(res);
       catImg.src = json.src;
     }

     console.log(catImg.src);
    }

downvote.addEventListener("click", async (e) => {
  e.preventDefault();
  let counter = document.querySelector(".score");
  let score = await kittenDownvote();
  counter.innerHTML = score;
});

async function kittenDownvote() {
  const res = await fetch("/kitten/downvote", {
    method: "PATCH",
  });
  const json = await res.json();
  console.log(json.score);
  return json.score;
}

let commentForm = document.querySelector(".comment-form");
let commentField = document.querySelector(".comments")
commentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const post = document.getElementById("user-comment").nodeValue;
    const res = await submitPost(e);
    // const json = await res.json()
    // console.log(res);
    // commentField.innerHTML = json;
})

async function submitPost() {
    const response = await fetch("/kitten/comments", {
        method: "POST",
        headers: {
            "Content-Type": "applications/json"
        },
        body: JSON.stringify({ comment })
    })
    console.log(response)
    // return await response.json();
}
