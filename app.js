console.log('Katalog warsztatów uruchomiony');
console.log(typeof 127);        // Wypisze: "number"
console.log(typeof true);       // Wypisze: "boolean"
console.log(typeof "127");      // Wypisze: "string"
console.log(typeof undefined);  // Wypisze: "undefined"
console.log(typeof NaN);        // Wypisze: "number" (ciekawostka JS - NaN to typ number)

const seats = 12;
const title = 'Kurs JavaScript';
let enrolled = 6;
let slogan;
let course;

console.log(typeof seats);     // number
console.log(typeof title);     // string
console.log(typeof enrolled);  // number
console.log(typeof slogan);    // undefined
console.log(typeof course);    // undefined

console.log(`${title}: wolne ${seats - enrolled} z ${seats}`);