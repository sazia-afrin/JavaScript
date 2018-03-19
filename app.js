 var name = "sazia";
 console.log(name);


 var age = 18;
 var skill = ["python", "django", "git"];

 var something;
 var anything = null;

 console.log(typeof name);
 console.log(typeof age);
 console.log(typeof skill);
 console.log(typeof something);
 console.log(typeof anything);
 something
 anything
 console.log(something == anything);
 console.log(undefined == null);
 console.log(something === anything);
 console.log(undefined === null);

 var someVar = 'Hello, World?';
 console.log(someVar);

 if (age >= 18) {
     console.log("yes i am eligiable");
 } else {
     console.log('no');

 }


 console.log('Hello,' + name);


 for (var i = 0; i < 20; i++) {
     console.log('myname ' + name);
 }

 // Array
 var name = [];
 name[0] = 'sazia';
 name[1] = 'afrin';
 name[2] = 'shorna';
 console.log(name);


 for (var i = 0; i < name.length; i++) {
     console.log('Hello, ' + name[i].toUpperCase());

 }
 // Diffrent array like python list

 var name = ['Sazia', 'shakib', 'shakil', 'tanan'];
 var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
 console.log(name.length);
 console.log(name[name.length - 1]);
 console.log('Name is ' + name[name.length - 1])
 console.log(name.indexOf('shakil'))

 name[name.length] = 'New';
 console.log(name);

 name.push('Mr.X');
 console.log(name);

 var sortedArray = name.sort();
 console.log(sortedArray);

 name.splice(4, 2); //kono index er value k delete koreer jonno 4, koita element seta 1 jodi aro 
 console.log(name);


 // function// JavaScript is a FirstClass Function when this 6 topic covered successfully.
 // 1. a function can be stored in a variable.
 function SayName(name) {
     return 'Hello,' + name;
 }

 var hello = SayName;
 var fun = SayName('sazia');
 console.log(hello);
 console.log(fun);

 console.log(hello('Afrin'));
 var anotherHello = hello;
 console.log(anotherHello('Sazia Afrin'));

 // 2.a function can be stored in a Array.
 var arr = [1, 5, 18, hello];

 arr.push(anotherHello); //array r moddhe function k push/store korlam.
 console.log(arr);

 // 3.a function can as an object field or property.

 var person = {
     name: 'Sazia Afrin',
     // SayName:SayName
     SayName: hello,
     print: function () {
         console.log('hi');

     }

 }
 console.log(person);

 person

 // 4. we can create function as needed.
 var sum = 10 + (function () {
     return 50
 })(); //ai function ke bole self invoking function.
 sum
 console.log(sum);

 // 5. we can pass funcion as a arguments.

 function wow(name, anyname) {

     return anyname(name)
 }
 var result = wow('SHORNA', SayName);
 console.log(result);

 // 6. we can return function from another function.

 function base(b) {
     return function (n) {
         var result = 1;
         for (var i = 0; i < b; i++) {
             result *= n;

         }
         return result;
     }
 }

//  var power = base(2);
//  var result = power(10);
//  result;

var result=base(3)(5); //uporer 3 ta line r ai line same 
result