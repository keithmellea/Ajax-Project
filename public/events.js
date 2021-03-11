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





  console.log(catImg.src);


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
