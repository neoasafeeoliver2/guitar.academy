const buttonCopyElement = document.querySelector("[data-button-copy]");
const inputElement = document.querySelector("[data-input]");

const writeTextOnTheClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Texto copiado com sucesso!");
    } catch (e) {
        console.log("Erro ao copiar texto:", e);
    }
}

const copy = () => {
    buttonCopyElement.addEventListener("click", () => {
        const text = inputElement.value;
        if (text.trim() !== "") { // Verifica se o valor não está vazio ou apenas espaços em branco
            writeTextOnTheClipboard(text);
        } else {
            console.log("Nada para copiar. O campo está vazio.");
        }
    });
}

copy();
