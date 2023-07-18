import save from "./save"

export default function edit() {
    const editBtn = document.querySelectorAll(".task:not(.done) .edit")
    const saveBtn = document.querySelectorAll(".task:not(.done) .save")
    editBtn.forEach(el => {
        el.addEventListener("click", function (e) {
            el.parentElement.parentElement.querySelector(".content input").removeAttribute("readonly")
            el.parentElement.parentElement.querySelector(".content input").focus()
            el.classList.add("hidden")
            el.previousElementSibling.classList.remove("hidden")
        })
    })
    saveBtn.forEach(el => {
        el.addEventListener("click", function () {
            el.parentElement.parentElement.querySelector(".content input").setAttributeNode(document.createAttribute("readonly"))
            el.nextElementSibling.classList.remove("hidden")
            el.classList.add("hidden")
            save()
        })
    })
}