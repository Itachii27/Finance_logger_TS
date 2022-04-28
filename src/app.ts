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
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  
  list.render(doc, type.value, 'end');
});

