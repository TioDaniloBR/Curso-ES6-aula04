////////////////////////////////Construção de um array///////////////////////////////////////////////
// const person = Array.of('John','Cris','Jenny');
// console.log(person);
// const numbersAndString = Array.of(1,2,'string','texto');
// console.log(numbersAndString);

// const arrayWith3positions = Array(3);
// console.log(arrayWith3positions);

// const personList = Array('John','Cris','Jenny');
// console.log(personList);
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////Inserir ou remover elementos/////////////////////////////////////////////////

// const frutas = ['melancia','banana'];
// console.log(frutas.push('laranja'));
// console.log(frutas);

// console.log(frutas.pop());
// console.log(frutas);

// console.log(frutas.unshift('laranja'));
// console.log(frutas);

// console.log(frutas.shift());
// console.log(frutas);

// const salgados = ['coxinha','kibe','empada'];

// const alimentos = frutas.concat(salgados);

// console.log(alimentos);

// frutas.splice(1,0,"acerola");
// console.log(frutas);

// console.log(frutas.splice(2,1,"laranja","amora"));
// console.log(frutas);

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                  Iterações                                //
///////////////////////////////////////////////////////////////////////////////

////////////////////////////////foreach/////////////////////////////////////////

// const frutas = ["melancia", "acerola", "laranja", "amora"];

// frutas.forEach((frutas,index,arr) => console.log(index,frutas,arr));

// frutas.map((frutas,index) => console.log(index+" - "+frutas));

// const idades = [20,34,[35,60,[70,40]]];
// console.log(idades);

// console.log(idades.flat(2));

// const frutasIterator = frutas.entries();
// console.log(frutasIterator);

// console.log(frutasIterator.next());
// console.log(frutasIterator.next());
// console.log(frutasIterator.next());
// console.log(frutasIterator.next());
// console.log(frutasIterator.next());

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                  Elementos                                //
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////

const students = [
    {name:'John', grade: 7},
    {name:'Jenny', grade: 5 },
    {name:'Peter',grade: 4}
];
console.log(students);

console.log(students.some(students=> students.grade >= 7 ));
console.log(students.find(students=> students.grade >= 7 ));
console.log(students.findIndex(students=> students.grade >= 7 ));
console.log(students.find(students=> students.grade < 7 ));

console.log(students.sort((current,next) => next.grade - current.grade));

console.log(students.reduce((totalGrades,students) => totalGrades += students.grade, 0) );
console.log(students.reduce((totalGrades,students) => totalGrades += students.grade, 0) / students.length );

console.log(students.reduce((studentsNames,students) => studentsNames += students.name+' ', '') );