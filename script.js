let preValue;
//Tomamos valores del formulario
const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".codigo-qr img"),
Btngenerado = wrapper.querySelector(".form button");

//Generar el cógio QR
Btngenerado.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    Btngenerado.innerText = "Generando código QR...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        Btngenerado.innerText = "Código QR Generado";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});