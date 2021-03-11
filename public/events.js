document.addEventListener('DOMContentLoaded', () => {

    const getKittenImg = async () => {

        const res = await fetch('/kitten/image');
        const json = await res.json()
        let catImg = document.querySelector('.cat-pic')


        if (res.ok) {
            catImg.src = kitten.src;
        } else {
            catImg.innerHTML = kitten.error
        }
})
