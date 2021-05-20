{
    const formRadio = document.querySelector(".js-formRadio");
    const formCheckbox = document.querySelector(".js-formCheckbox");
    const formSelect = document.querySelector(".js-formSelect");

    const calculateResultRadio = () => {

        const PLN = document.querySelector(".js-PLN");
        const EUR = document.querySelector(".js-EUR");
        const USD = document.querySelector(".js-USD");
        const CHF = document.querySelector(".js-CHF");
        const result = document.querySelector(".js-result");

        let sum;
        const PLNrate = +PLN.value;
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

    const calculateResultCheckbox = () => {
        const PLN2 = document.querySelector(".js-PLN2");
        const EUR2 = document.querySelector(".js-EUR2");
        const USD2 = document.querySelector(".js-USD2");
        const CHF2 = document.querySelector(".js-CHF2");
        const resultEUR = document.querySelector(".js-resultEUR");
        const resultUSD = document.querySelector(".js-resultUSD");
        const resultCHF = document.querySelector(".js-resultCHF");

        let sum1;
        let sum2;
        let sum3;
        const PLNrate = +PLN2.value;
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
    }

    const init = () => {

        formRadio.addEventListener("submit", (event) => {
            event.preventDefault();
            calculateResultRadio();
        })
    
        formCheckbox.addEventListener("submit", (event) => {
            event.preventDefault();
            calculateResultCheckbox();
    })
}

init();








formSelect.addEventListener("submit", (event) => {
    event.preventDefault();

    const PLN3 = document.querySelector(".js-PLN3");
    let currency = document.querySelector(".js-currency");
    const resultSelect = document.querySelector(".js-resultSelect");

    let sum;
    const PLNrate = +PLN3.value;
    const EURrate = 4;
    const USDrate = 5;
    const CHFrate = 6;

    currency = currency.value;

    if (PLN3.value <= 0) {
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