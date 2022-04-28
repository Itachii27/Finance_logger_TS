//interfaces
/*
interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}
const me: IsPerson ={
    name: 'surbhi',
    age: 23,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number{
        console.log('I spent', amount)
        return amount
    }
};
const greetPerson = (person: IsPerson) => {
    console.log('hello' , person.name)
}
greetPerson(me)
*/
/*
let docOne: HasFormatter
let docTwo: HasFormatter

docOne =  new Invoice('aman', 'web work', 250)
docTwo =  new Payment('amann', 'web work', 250)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)
const invOne = new Invoice('surbhi', 'work on wesbite', 250);
const invTwo = new Invoice('deepika', 'work on wesbite', 250);
console.log(invOne, invTwo)

let invoices: Invoice[] =[]
invoices.push(invOne)
invoices.push(invTwo)
console.log(invoices)

//invOne.client = 'aman'
invTwo.amount = 400
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
});
*/
//const anchor =  document.querySelector('a')!;
// if (anchor){
//   console.log(anchor.href);
//}
//console.log(anchor.href)
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
