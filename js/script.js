{
let formRadio = document.querySelector(".js-formRadio");
let formCheckbox = document.querySelector(".js-formCheckbox");
let formSelect = document.querySelector(".js-formSelect");

const calculateResultRadio = () => {

    let PLN = document.querySelector(".js-PLN");
    let EUR = document.querySelector(".js-EUR");
    let USD = document.querySelector(".js-USD");
    let CHF = document.querySelector(".js-CHF");
    let result = document.querySelector(".js-result");

    let sum;
    let PLNrate = +PLN.value;
    const EURrate = 4;
    const USDrate = 5;
    const CHFrate = 6;

    if (PLN.value <= 0) {
        result.innerHTML = `please write the amount in PLN and at least 1`;
    } else if (EUR.checked) {
        sum = PLNrate / EURrate;
        result.innerHTML = `${PLNrate.toFixed(2)} PLN = ${sum.toFixed(2)} EUR `;
    } else if (USD.checked) {
        sum = PLNrate / USDrate;
        result.innerHTML = `${PLNrate.toFixed(2)} PLN = ${sum.toFixed(2)} USD`;
    } else if (CHF.checked) {
        sum = PLNrate / CHFrate;
        result.innerHTML = `${PLNrate.toFixed(2)} PLN = ${sum.toFixed(2)} CHF`;
    } else {
        result.innerHTML = `check currency radio button`;
    }
}

const init = () => {
formRadio.addEventListener("submit", (event) => {
    event.preventDefault();

    calculateResultRadio();
})
}

init();

formCheckbox.addEventListener("submit", (event) => {
    event.preventDefault();

    let PLN2 = document.querySelector(".js-PLN2");
    let EUR2 = document.querySelector(".js-EUR2");
    let USD2 = document.querySelector(".js-USD2");
    let CHF2 = document.querySelector(".js-CHF2");
    let resultEUR = document.querySelector(".js-resultEUR");
    let resultUSD = document.querySelector(".js-resultUSD");
    let resultCHF = document.querySelector(".js-resultCHF");

    let sum1;
    let sum2;
    let sum3;
    let PLNrate = +PLN2.value;
    const EURrate = 4;
    const USDrate = 5;
    const CHFrate = 6;

    resultEUR.innerHTML = "";
    resultUSD.innerHTML = "";
    resultCHF.innerHTML = "";

    if (PLN2.value <= 0) {
        resultEUR.innerHTML = `please write the amount in PLN and at least 1`;
    } else if (EUR2.checked || USD2.checked || CHF2.checked) {
        if (EUR2.checked) {

            sum1 = PLNrate / EURrate;
            resultEUR.innerHTML = `${PLNrate.toFixed(2)} PLN = ${sum1.toFixed(2)} EUR `;
        }
        if (USD2.checked) {

            sum2 = PLNrate / USDrate;
            resultUSD.innerHTML = `${PLNrate.toFixed(2)} PLN = ${sum2.toFixed(2)} USD`;
        }
        if (CHF2.checked) {

            sum3 = PLNrate / CHFrate;
            resultCHF.innerHTML = `${PLNrate.toFixed(2)} PLN = ${sum3.toFixed(2)} CHF`;
        }
    } else {
        resultEUR.innerHTML = `please check any currency`;
    }

});


formSelect.addEventListener("submit", (event) => {
    event.preventDefault();

    let PLN3 = document.querySelector(".js-PLN3");
    let currency = document.querySelector(".js-currency");
    let resultSelect = document.querySelector(".js-resultSelect");

    let sum;
    let PLNrate = +PLN3.value;
    const EURrate = 4;
    const USDrate = 5;
    const CHFrate = 6;

    currency = currency.value;

if (PLN3.value <= 0 ) {
    resultSelect.innerHTML = `please write amount in PLN more than 0`;
} else {
    switch (currency) {
        case "EUR":
            sum = PLNrate / EURrate;
            break;
        case "USD":
            sum = PLNrate / USDrate;
            break;
        case "CHF":
            sum = PLNrate / CHFrate;
            break;
    }
}
    resultSelect.innerHTML = `${PLNrate.toFixed(2)} PLN = ${sum.toFixed(2)} ${currency}`
});

}