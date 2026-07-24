// Seleciona os elementos
const botao = document.getElementById("revelar");
const popup = document.getElementById("popup");

// Quando clicar no botão
botao.addEventListener("click", () => {
    popup.style.display = "flex";
});

// Função para fechar o popup
function fechar() {
    popup.style.display = "none";
}

// Fecha o popup ao clicar fora da caixa
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        fechar();
    }
});