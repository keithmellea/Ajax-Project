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

upvote.addEventListener("submit", async (e) => {
    e.preventDefault();

})
 async function kittenUpvote(score) {
    const res = await fetch("/kitten/upvote", {
      method: "PATCH",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({ score: res.score }),
    });
    const json = await res.json()
    console.log(json.score)
    // return await res.json()
    return json.score
 }

kittenUpvote(1)

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
