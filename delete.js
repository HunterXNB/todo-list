import save from "./save"

export default function remove() {
    const delBtn = document.querySelectorAll(".del")
    delBtn.forEach(el => {
        el.addEventListener("click", function (e) {
            el.parentElement.parentElement.remove()
            save()
        })
    })
}