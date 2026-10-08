// ===== typy =====
console.log(typeof (()=>{}));   // "function"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
console.log(typeof -"fef");     // "number" (NaN)


if (true) {
  var a = "avaliable from block outside";   
  let b = "unavaliable outside the scope of block"; 
}
console.log(a); 


try {
  console.log(b);
} catch (err) {
  console.log("b niedostępne poza blokiem:", err.message);
}

const c = "wwww"; 

console.log(`${c} ${a}`);
console.log(c + " " + a);
console.log(`${-"f" ? c : a}`); 


const lang = "js";
const kurs = `Kurs ${lang}`;
const stopien = "sredniozaawansowany";


const iloscMiejsc = `${Math.floor(Math.random() * 10)} / 10 zajętych`;


if (lang === 'js') {
  console.log("console.log('hello world')");
} else if (lang === 'ts') {
  console.log("typeof console.log('hello world')");
} else {
  console.log("print('hello world')");
}


switch (lang) {
  case 'js':
    console.log("console.log('hello world')");
    break;
  case 'ts':
    console.log("typeof console.log('hello world')");
    break;
  default:
    console.log("print('hello world')");
}


lang === 'js'
  ? console.log("console.log('hello world')")
  : lang === 'ts'
    ? console.log("typeof console.log('hello world')")
    : console.log("print('hello world')");


function printInfo() {
  console.log("Kurs:", kurs);
  console.log("Stopień:", stopien);
  console.log("Miejsca:", iloscMiejsc);
}

printInfo();