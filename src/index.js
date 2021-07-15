"use strict";

/**
 Problem #1: Scope practice - execute the code in Function 1 and 2, explain the difference in output.

    1. Function 1

     function fun(){
         function fun2(){
           i = 100;
         }
         fun2();
         console.log(i);
        }
      fun();


    2. Function 1

      function fun(){
      	function fun2(){
      		let i = 100;
      	}
      	fun2();
      	console.log(i);
      }
      fun();


 */

// ANSWER


/**
 Problem #2: Hoisting - Try to guess the output of the following code


  var x = 10;
  function test()
    {
        var x = 20;
    }

  test();
  console.log(x);


// ANSWER


/**
  Problem #3: Closure - In the following code make a call to the "inner" function with input parameter "5" and console log the output.


  function foo(outer_arg) {

    	function inner(inner_arg) {
    		return outer_arg + inner_arg;
    	}
    	return inner;
    }


 */

// ANSWER



/**
  Problem #4: IIFE - Create an IIFE to add two numbers and return the result


 */

// ANSWER
