import Row from './Row';

const totalQuantity = document.querySelector('.total-quantity');
const totalCost = document.querySelector('.total-cost');
const itemRows = document.querySelector('.item-rows');

export const renderTotal = (cart) => {
  const costTotal = cart
    .reduce((prev, item) => prev + item.cost * item.quantity , 0)
    .toPrecision(6);
  const quantityTotal = cart
    .reduce((prev, item) => prev + item.quantity, 0);
  
    totalCost.innerText = costTotal;
    totalQuantity.innerText = quantityTotal;
};

export const renderRows = (rows) => {
  const domNodes = rows.map(({product, quantity, cost}) => {
    return Row(product, quantity, cost.toPrecision(5))
  });

  itemRows.innerHTML = domNodes.join('');
};
