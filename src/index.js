document.addEventListener("DOMContentLoaded", () => {
  newActivity()  
})

function newActivity() {
    fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => {
        let p = document.getElementById("new-activity")
        p.innerHTML = data.activity 
    })
}














