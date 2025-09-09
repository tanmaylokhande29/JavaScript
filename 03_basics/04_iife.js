// Immediately Invoked Function Expressions (IIFE)


(function chai(){
  // named iifi
  console.log(`DB connected`);
})();
// to iife we dont call chai() but we write () and function into the brackets

// (def of the function) (execution)  => ()()

((name) => { //unamed iifi
  console.log(`DB Connected two ${name} `);

}) ('tanmay')