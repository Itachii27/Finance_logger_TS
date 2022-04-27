import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('surbhi', 'work on wesbite', 250);
const invTwo = new Invoice('deepika', 'work on wesbite', 250);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
//invOne.client = 'aman'
invTwo.amount = 400;
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//const anchor =  document.querySelector('a')!;
// if (anchor){
//   console.log(anchor.href);
//}
//console.log(anchor.href)
const form = document.querySelector('.new-item-form');
//console.log(form.children)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
