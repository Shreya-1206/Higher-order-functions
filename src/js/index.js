import cart from './cart.json';
import { renderRows, renderTotal } from './view';
import currencyRates from './currencyRates.json';

const currencyPicker = document.querySelector("select[name='currency-picker']");

currencyPicker.innerHTML = Object.keys(currencyRates)
    .map((key) => `<option>${key}</option>`)
    .join('');

// Hoc 
const recompute = function (currencyCode, rates, fn)  {
    const conversionRates = rates[currencyCode] ?? 1;

    return (cart) => {
        const revised = cart.map((item) => {
            return {
                ...item,
                cost : item.cost * conversionRates,
            };
        });
        return fn(revised);
    }
}
const computeCart = function () {
    const currency = this?.value;
    recompute(currency, currencyRates, renderRows)(cart); ///double invocation
    
    //renderRows(cart);
    //renderTotal(cart);
};

currencyPicker.addEventListener('change', computeCart);

computeCart();