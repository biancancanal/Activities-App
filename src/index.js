document.addEventListener("DOMContentLoaded", () => {
  newActivity()  
})

function newActivity() {
    fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}