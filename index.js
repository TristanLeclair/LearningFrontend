

let count = 0
let countEl = document.getElementById("count-el")
let prevSaves = document.getElementById("last-saves")

prevSaves.innerText = "Prev saves: "

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    prevSaves.innerText += count + " - "
}