try {
    const result = calculateArea("circle", 10);
    console.log("Result c:", result);
    const result2 = calculateArea("square", 10);
    console.log("Result s:", result2);

    console.log("\nCalling getCalculation('area')('circle', 10) before declarations:"); 
    const resultAfter = getCalculation("area")("circle", 10);
    console.log("Result:", resultAfter);

  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Write a function declaration calculateArea(shape, value) that calculates
  function calculateArea(shape, value) {
    if (shape === "circle") {
      return Math.PI * value * value;
    } else if (shape === "square") {
      return value * value;
    }
    throw new Error("Unknown shape");
  }
  
  //calculates the perimeter of the same shapes
  const calculatePerimeter = function(shape, value) {
    if (shape === "circle") {
      return 2 * Math.PI * value;
    } else if (shape === "square") {
      return 4 * value;
    }
    throw new Error("Unknown shape");
  };
  
  // Higher-order function
  function getCalculation(type) {
    if (type === "area") {
      return calculateArea;
    } else if (type === "perimeter") {
      return calculatePerimeter;
    }
    throw new Error("Unknown calculation type");
  }

  
  console.log("\nCalling getCalculation('area')('circle', 10) after declarations:");
  const resultAfter = getCalculation("area")("circle", 10);
  console.log("Result:", resultAfter);
  
  try {
    console.log("\nTrying to use calculatePerimeter before declaration:");
     const perimeter = calculatePerimeter("square", 5);
  } catch (error) {
    console.log("Error:", error.message);
  }

  // Regular function closure
function createCounter(start) {
    let count = start;
    
    return function() {
      console.log("Current count (regular function):", count);
      return count++;
    };
  }
  

  //2️⃣ Closures & Arrow Functions
  // Arrow function closure
  function createArrowCounter(start) {
    let count = start;
    
    return () => {
      console.log("Current count (arrow function):", count);
      return count++;
    };
  }
  
  // Testing regular counter
  console.log("Testing regular counter:");
  const counter = createCounter(5);
  counter(); 
  counter(); 
  counter();
  
  // Testing arrow counter
  console.log("\nTesting arrow counter:");
  const arrowCounter = createArrowCounter(5);
  arrowCounter(); 
  arrowCounter(); 
  arrowCounter(); 
  arrowCounter(); 
  arrowCounter(); 
  arrowCounter(); 

  
  // Showing closure remembers outer variable
  console.log("\nShowing closure remembers outer variable:");
  const counterA = createCounter(10);
  const counterB = createCounter(20);
  counterA(); // 10
  counterB(); // 20
  counterA(); // 11
  counterB(); // 21


//3️⃣ Scope, Parameters, and this Binding (5 pts.)
function greetUser(name = "Guest") {
    console.log(`Hi, ${name}`);
  }
  

  const user = {
    name: "Lorence",
    
    sayHi: function() {
      console.log(`Hi, my name is ${this.name}`);
    },
    
    sayHiArrow: () => {
      console.log(`Hi, my name is ${this.name}`);
    }
  };
  
  // Testing scope with var vs let
  function testLoopScope() {
    console.log("\nTest var vs let:");
    
    for (var i = 0; i < 5; i++) {
      console.log("var i after loop:", i);
    }
    
    for (let j = 0; j < 5; j++) {
        console.log("let j after loop:", j); 
    }
  }
  
  // Run all tests
  console.log("Testing greetUser with default parameter:");
  greetUser(); 
  greetUser("Basilisk");
  
  console.log("\nTesting object methods:");
  user.sayHi(); 
  user.sayHiArrow(); 
  
  testLoopScope();