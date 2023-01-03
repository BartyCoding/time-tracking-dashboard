const daily = document.querySelector("#daily")
const weekly = document.querySelector("#weekly")
const monthly = document.querySelector("#monthly")

daily.addEventListener("click", () => {
    document.querySelectorAll(".daily").forEach(e => { e.classList.remove("hide") })
    document.querySelectorAll(".weekly").forEach(e => { e.classList.add("hide") })
    document.querySelectorAll(".monthly").forEach(e => { e.classList.add("hide") })

    daily.classList.add("selected")
    weekly.classList.remove("selected")
    monthly.classList.remove("selected")

})

weekly.addEventListener("click", () => {
    document.querySelectorAll(".weekly").forEach(e => { e.classList.remove("hide") })
    document.querySelectorAll(".daily").forEach(e => { e.classList.add("hide") })
    document.querySelectorAll(".monthly").forEach(e => { e.classList.add("hide") })

    weekly.classList.add("selected")
    daily.classList.remove("selected")
    monthly.classList.remove("selected")
})

monthly.addEventListener("click", () => {
    document.querySelectorAll(".monthly").forEach(e => { e.classList.remove("hide") })
    document.querySelectorAll(".weekly").forEach(e => { e.classList.add("hide") })
    document.querySelectorAll(".daily").forEach(e => { e.classList.add("hide") })

    monthly.classList.add("selected")
    weekly.classList.remove("selected")
    daily.classList.remove("selected")
})