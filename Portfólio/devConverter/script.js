const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();

    if(!inputValue.value || inputValue.value <0 ) {
     alert('Informe um valor válido');
     return;
     } else if(!selectedCurrency.value) {
        alert('Escolha uma moeda')
     }
     converter();
};

function converter() {
    if(selectedCurrency.value === 'eur') {
    valueConverted = inputValue.value * 5.25;
    result.innerHTML = valueFormatter('pt-BR', 'EUR');

     animateResult();

 }  if(selectedCurrency.value === 'dol') {
    valueConverted = inputValue.value * 4.91;
   result.innerHTML = valueFormatter('en-US', 'USD'); 
    animateResult();

}  else if(selectedCurrency.value === 'gbp') {
    valueConverted = inputValue.value * 6.11;
    result.innerHTML = valueFormatter('en-EN', 'GBP');
     animateResult();
}
   
   
   inputValue.value ='';
   selectedCurrency.value = '';
};

function valueFormatter(Locale, currency) {
const value = valueConverted.toLocaleString(`${Locale}`,{style: 'currency', currency: `${currency}`});
return `<span>💵</span> ${value} <span>💰</span>`
};

function animateResult() {
    return result.animate([
    { transform: 'translateX(-150px)'},
    { transform: 'translateX(0px)'},
 ], {duration: 800});
};

