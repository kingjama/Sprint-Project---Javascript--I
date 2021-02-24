// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation (Min 50 words): 


Because in closures, the nested function has access to the outer function scope. Even after the function has returned, a closure will be able to access arguments and variables of its outer function which in this case is myFunction(). The inner function can access variables defined in its own scope, its outer function's scope, and the global scope. This is why the inner function (nestedFunction()) can access its outer function scope which is the myFunction(), in which the outer function(myFunction()) returns the global scope. The inner function (nestedFunction) has access to all of the above. 