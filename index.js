var currentDate = new Date();

console.log('Problem 1:');
console.log(currentDate.toLocaleDateString('vi', { year: '2-digit', month: '2-digit', day: '2-digit' }).replace(/\//g, '-'));
console.log(currentDate.toLocaleDateString('vi', { year: '2-digit', month: '2-digit', day: '2-digit' }).replace(/\//g, '-') + ' ' + currentDate.toLocaleTimeString('vi', { hour: 'numeric', minute: 'numeric' }));
console.log(currentDate.toLocaleDateString('vi', { year: '2-digit', month: '2-digit', day: '2-digit' }).replace(/\//g, '-') + ' ' + currentDate.toLocaleTimeString('vi', { hour: 'numeric', minute: 'numeric', second: 'numeric' }));
console.log(currentDate.toLocaleDateString('vi', { year: '2-digit', month: '2-digit', day: 'numeric' }));
console.log(currentDate.toLocaleDateString('vi', { year: '2-digit', month: '2-digit', day: '2-digit' }));
console.log(currentDate.toLocaleDateString('en', { year: 'numeric', month: 'short', day: '2-digit' }));
console.log(currentDate.toLocaleDateString('en', { year: 'numeric', month: 'long', day: '2-digit' }));
console.log(currentDate.toLocaleDateString('vi', { year: '2-digit', month: '2-digit', day: '2-digit' }) + ' ' + currentDate.toLocaleTimeString('en', { hour12: true, hour: 'numeric', minute: 'numeric' }));
console.log(currentDate.toLocaleDateString('en', { year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' }));
console.log(currentDate.toLocaleDateString('en', { year: 'numeric', month: 'long', day: '2-digit', weekday: 'long', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }));

console.log('=========================================');
console.log('Problem 2:');

function convertF(celsius) {
   return ((9 * celsius + 160) / 5);
}

function convertC(fahrenheit) {
   return (5 * fahrenheit - 160) / 9;
}

console.log('60C = ', convertF(60) + 'F');
console.log('45F = ', convertC(45) + 'C');

console.log('=========================================');
console.log('Problem 3:');

const url = window.location.href;
console.log(url);

console.log('=========================================');
console.log('Problem 4:');
console.log('choose a file');

let fileEle = document.getElementById('file');
fileEle.onchange = () => {
   let file = document.getElementById('file').files[0];
   console.log('=========================================');
   console.log('Problem 4:');
   console.log('file extension:', file.type.split(/\//)[1]);
};

console.log('=========================================');
console.log('Problem 5:');
console.log('Type string!');
document.getElementById('btn-replace').onclick = () => {
   let string = document.getElementById('problem-5-string').value;
   let position = parseInt(document.getElementById('problem-5-position').value);
   console.log('=========================================');
   console.log('Problem 5:');
   if(position === 0) {
      console.log('New string: ', string.slice(position + 1));
      return;
   }

   console.log('New string: ', [string.slice(0, position), string.slice(position + 1)].join(''));

}

console.log('=========================================');
console.log('Problem 6:');
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

names.map((name) => {
   let say = name[0] === 'J' | 'j' ? 'Goodbye' : 'Hello';

   console.log(`${say} ${name}`);
})

console.log('=========================================');
console.log('Problem 7:');

var people = ["Greg", "Mary", "Devon", "James"];

console.log('Loop: ');
people.map(people => {
   console.log(people);
});
console.log('remove Greg: ');
people.splice(0, 1);
console.log(people);

console.log('remove James: ');
people.splice(2, 1);
console.log(people);

console.log('add Matt: ');
people.unshift('Matt');
console.log(people);

console.log('add my name: ');
people.push('Mau');
console.log(people);

console.log('exit after log Mary');

for(let i = 0; i < people.length; i++) {

   if(people[i] === 'Mary') {
      console.log(people[i]);
      i = -2;
      break;
   }
   console.log(people[i]);

}

console.log('copy array: ');
let copyOfPeople = people.slice(2);
console.log(copyOfPeople);

console.log('index of Mary: ', people.indexOf('Mary'));
console.log('index of Foo: ', people.indexOf('Foo'));

var people = ["Greg", "Mary", "Devon", "James"];

console.log('remove Devon and add Elizabeth, Artie');
people.splice(2, 1, 'Elizabeth', 'Artie');
console.log(people);

console.log('withBob:');
let withBob = 'Bob';
people = people.map(people => {
   return people.concat(withBob);
})
console.log(people);
