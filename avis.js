export function ajoutListenerAvis() {
    const piecesElements = document.querySelectorAll(".fiches article button")
    console.log(".fiches article button", piecesElements)
    for (let i = 0; i < piecesElements.length; i++) {
        piecesElements[i].addEventListener("click", async function (event) {
            const id = event.target.dataset.id
            fetch(`http://localhost:8081/pieces/${id}/avis`)

        })
    }
}