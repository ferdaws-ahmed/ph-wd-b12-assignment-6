

# 1. What is the difference between var, let, and const?

****VAR :****  var is the oldest method for declaring variables in JavaScript. It was used before ES6. A variable declared with var can only be accessed within the function where it is declared. It does not work outside of the function.Variables declared with var are hoisted, meaning the variable is moved to the top of the code. As a result, it can be accessed before it is declared. However, its value remains undefined.A var variable can be redeclared as many times as you want within the same scope.


****Let :****  let was introduced in ES6. A variable declared with let can only be accessed within a block. It doesn't work outside the block. It is very useful for loops and conditional statements.let is hoisted, but not in the same way as var. Trying to access it before it's declared will result in a ReferenceError.A let variable cannot be redeclared within the same scope, which results in a SyntaxError. However, it can be reassigned.


****Const :****  const also came with ES6 and works similarly to let, but there are some important differences.Just like let, const is also block-scoped. Similar to let, const is also hoisted and shows a ReferenceError if accessed before declaration.A variable declared with const cannot be redeclared or reassigned. Its value always remains constant. However, if an object or an array is declared with const, its inner properties or elements can be changed.






# 2. What is the difference between map(), forEach(), and filter()?

*map(), forEach(), and filter() are all Array methods in JavaScript, which are used to manipulate data.*

****map() :**** The map() method executes a function on each element of an array and creates a new array with the return values from that function. It always returns a new array, whose length is equal to the original array. It is used when there is a need to transform each element of an array to create a new one.

****forEach() :**** The forEach() method executes a provided function once for each array element. Its main purpose is to print something to the console or to modify the DOM. forEach() does not create or return a new array; it always returns undefined. It is used when an operation needs to be performed on each element of an array, but the result of that operation does not need to be stored in a new array.

****filter() :**** The filter() method executes a function on each element of an array. If the function returns true for an element, that element is used to build a new array. It returns a new array that contains only the elements that satisfy the given condition. It is used when there is a need to find and extract certain elements from an array based on a specific condition to create a new array.






# 3. What are arrow functions in ES6?

****Arrow function :**** Arrow functions are a new and concise syntax introduced in ES6 that makes writing functions easier. They are identified by (=>) . They are generally used for writing anonymous functions and use much less code than a regular function.An arrow function does not have its own arguments object. If the function contains only one expression, the return keyword can be omitted.





# 4. How does destructuring assignment work in ES6?
Destructuring assignment in ES6 is a special syntax in JavaScript that simplifies the process of extracting data from arrays or objects and assigning them to variables. This method makes the code more concise and readable.Array destructuring normally, to assign array elements to separate variables, a separate line has to be written for each element. Using destructuring, this can be done in a single line.Similar to arrays, object properties can also be easily accessed using destructuring. Square brackets [] are used for writing array destructuring. Curly brackets {} are used for writing object destructuring.


# 5. Explain template literals in ES6. How are they different from string concatenation?

**Template literals in ES6 are an improved method for writing strings, which are written inside backticks (``). They make it much easier to include variables or expressions within a string. The ${...} syntax is used to directly add variables or any JavaScript expressions inside the string. There is no need to use a special character (like \n) for writing multi-line strings; a new line can be created directly with the enter key.**

*Template literals and string concatenation are both used to combine multiple strings, but there are major differences in how they work.*

****String concatenation :**** String concatenation uses the + operator to join multiple strings and variables. It is an older method and can make the code quite complex, especially when there are multiple variables or long strings.This method makes the code complex and prone to errors due to the use of quotation marks '' or "" and the repetitive use of the + operator.
  
  ***Example*** 

     ``` const name = 'Rohim';
        const age = 30;
        const message = 'My name ' + name + ' and my age ' + age + ' years';
        console.log(message);
        //output: My name Rohim and my age 30 years.
     ```

****Template literals :**** The task that we did above using string concatenation can be done much more easily and cleanly using template literals. This can be done very easily by writing the entire string within backticks (``) and using the ${variable_name} syntax to add variables or expressions.

***Example*** 

     ``` const name = 'Rohim';
        const age = 30;
        const message = `My name ${name} and my age ${age} years`;
        console.log(message);
        //output: My name Rohim and my age 30 years.
     ```

***In short, template literals are a modern and effective way to easily combine strings and variables, making the code much cleaner and more readable than string concatenation.***