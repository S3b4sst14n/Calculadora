const results = document.querySelector(".results");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "delete") {
            results.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (results.textContent.length === 1 || results.textContent === "Error!") {
                results.textContent = "0";
            } else {
                results.textContent = results.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                results.textContent = eval(results.textContent);
            } catch {
                results.textContent = "Error :(";
            }
            return;
        }

        if (results.textContent === "0" || results.textContent === "Error :(") {
            results.textContent = botonApretado;
        } else {
            results.textContent += botonApretado;
        }
    })
})