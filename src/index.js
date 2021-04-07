document.addEventListener("DOMContentLoaded", () => {
  newActivity()  
  document.getElementById("heart").addEventListener("click", saveActivity)
})

function newActivity() {
    fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => {
        let p = document.getElementById("new-activity")
        p.innerHTML = data.activity 
    })
}


function saveActivity(e) {
    console.log(e.target)
    let saved = document.getElementById("saved-list")
    let li = document.createElement('li');
    li.innerHTML = document.getElementById("new-activity").innerHTML
    saved.appendChild(li)
    newActivity()
}













