import render from "./render"
import save from "./save"

export default function done() {
    const tasks = document.querySelectorAll(".text:read-only")
    tasks.forEach(el => {
        el.addEventListener("click", function () {
            if (el.hasAttribute("readonly")) {
                el.parentElement.parentElement.classList.toggle("done")
                save()
                render()
            }
        })
    })
}