//CVC
const inputCvc = document.querySelector("#input-cvc");
const cvc = document.querySelector("#cvc");
const card = document.querySelector("#card");
inputCvc.addEventListener("focus", () => {
    if (inputCvc.value.length > 0) {
        cvc.innerHTML = inputCvc.value;
    }
    card.classList.add("to-backface");
})
inputCvc.addEventListener("focusout", () => {
    card.classList.remove("to-backface");
})
inputCvc.addEventListener("keyup", (e) => {
    if (inputCvc.value.length > 3 || /\D/.test(inputCvc.value)) {
        inputCvc.value = inputCvc.value.slice(0, -1);
    }
    cvc.innerHTML = inputCvc.value;
})

//NUMBER CARD
const cardNumber = document.querySelector("[data-card-number]");
const inputCardNumber = document.querySelector("#input-card-number");
inputCardNumber.addEventListener("focus", () => {
    cardNumber.classList.add("selected");
})
inputCardNumber.addEventListener("focusout", () => {
    cardNumber.classList.remove("selected");
})
inputCardNumber.addEventListener("keydown", (e) => {
    if (inputCardNumber.value.length === 4 && e.key !=="Backspace") {
        inputCardNumber.value += " ";
    }
    if (inputCardNumber.value.length === 9 && e.key !=="Backspace") {
        inputCardNumber.value += " ";
    }
    if (inputCardNumber.value.length === 14 && e.key !=="Backspace") {
        inputCardNumber.value += " ";
    }
})
inputCardNumber.addEventListener("keyup", (e) => {
    if (inputCardNumber.value.length > 19) {
        inputCardNumber.value = inputCardNumber.value.slice(0, -1);
    }

    if (/(\D^\s)/.test(inputCardNumber.value)) {
        inputCardNumber.value = inputCardNumber.value.slice(0, -1);
    }
    cardNumber.setAttribute("data-card-number", inputCardNumber.value.replaceAll(' ', '').padEnd(16, "#"))
    Array.from(cardNumber.children).forEach((item, idx) => {
        item.innerHTML = cardNumber.getAttribute("data-card-number").slice(4*idx,4*(idx+1))
    })
})
//NAME HOLDER
const inputHolderName = document.querySelector("#input-holder-name");
const holderName = document.querySelector("#holder-name");
console.log(holderName);
if (inputHolderName.value.length > 0) {
    holderName.innerHTML = inputHolderName.value;
}
inputHolderName.addEventListener("focus", () => {
    holderName.classList.add("selected")
    holderName.innerHTML = inputHolderName.value + "<span class='cursor'>&ensp;</span>";
})
inputHolderName.addEventListener("focusout", () => {
    holderName.classList.remove("selected")
    holderName.removeChild(holderName.querySelector(".cursor"));
})
inputHolderName.addEventListener("keyup", () => {
    let arr = [...inputHolderName.value];
    let len = inputHolderName.value.length;
    arr[len] = "<span class='cursor'>&ensp;</span>"
    holderName.innerHTML = arr.join('');
})
//EXPIRE DATE
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const month = document.querySelector("#month")
const year = document.querySelector("#year")
month.innerHTML = inputMonth.value;
year.innerHTML = inputYear.value;
inputMonth.addEventListener("change", () => {
    month.innerHTML = inputMonth.value;
})
inputYear.addEventListener("change", () => {
    year.innerHTML = inputYear.value;
})
inputMonth.addEventListener("focus", () => {
    month.classList.add("selected")
})
inputMonth.addEventListener("focusout", () => {
    month.classList.remove("selected")
})
inputYear.addEventListener("focus", () => {
    year.classList.add("selected")
})
inputYear.addEventListener("focusout", () => {
    year.classList.remove("selected")
})
