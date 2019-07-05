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

//Difference 

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
