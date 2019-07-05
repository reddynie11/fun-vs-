//regular function
let square = function(x){ 
    return (x*x); 
    }; 
    console.log(square(9)); 
// op : 81

//arrow function 
var square1 = (x) => { 
	return (x*x); 
}; 
console.log(square1(9)); 
// op :81

//Difference 1

//Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’.
let x = function(){ 
	console.log(arguments); 
}; 
new x(1,2,3);
// op : [Arguments] { '0': 1, '1': 2, '2': 3 } 

//functions created using arrow function declarations or expressions are not ‘constructible’ and ‘callable’.
        // let x1 = ()=> { 
        //     console.log(arguments); 
        // }; 
        // new x1(1,2,3); 

        // // op : TypeError: x1 is not a constructor


        //Diference 2
        
//this in fun() vs ()=>
let People = function(person, age) { 
    this.person = person; 
    this.age = age; 
    this.info = function() { 

     // logs People 
     console.log(this);   // op : People { person: 'John', age: 21, info: [Function] }

     setTimeout(function() { 
        // here this!=People 
       console.log(this.person + " is " + this.age + " years old"); //undefined is undefined years old
      }, 3000); 
    } 
}  
let person1 = new People('John', 21); 

// logs : undefined is undefined years old after 3 seconds 
person1.info();
// op : People { person: 'John', age: 21, info: [Function] }
//undefined is undefined years old

let People1 = function(person, age) { 
    this.person = person; 
    this.age = age; 
    this.info = function() { 

        // logs People 
        console.log(this);  

       setTimeout(() => {  
        // arrow function to make lexical "this" binding 
        // here this=People."this" has been inherited 
        console.log(this.person + " is " + this.age  
                                       + " years old"); 
       }, 3000); 
    } 
}  
let person2 = new People1('John', 21); 

// logs : John is 21 years old after 3 seconds 
person2.info();

// op : People1 { person: 'John', age: 21, info: [Function] }
//John is 21 years old