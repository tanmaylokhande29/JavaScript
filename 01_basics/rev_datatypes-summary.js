// # Primitive

// 7 types:
          /*  STRING
              NUMBER
              BOOLEAN
              NULL = ITS NOT ZERO BUT A MATTER WHICH WILL NEVER HAVE ANY VALUE
              UNDEFINED = GIVEN VARIABLE NOT VALUE GIVEN YET
              SYMBOL = USED TO MAKE ANY VALUE UNIQUE
              BigInt

              */

    const score = 100
    const ScoreValue = 100.33 // here there are no data type like int and float all the value are stored as an interger value

    const isLoggedIn = false //here also it automatically assumes that its goona be a boolean data typee t/f .
    const outsideTemp = null

    let userEmail; //there no value stored now it is an undefined value but not labeling it also take it as an undefined value
    //can also be written has
    let useremail = undefined //both are same


    //symbol
    const id = Symbol('123')
    const Anotherid = Symbol('123')
 // this are not gooona be same even if the data in them is same
    console.log(id === Anotherid);


    const BigNumber = 321654987546412364654n // here n represents big int




// Reference (Non-Primitive)

              /*
              Arrays
              Objects
              Functions

            when data type is checked all the above 3 non premitive values are considered as an OBJECT value
              */

    const heros = ["shaktiman","naagraj","doga"] //array

    let myobj={         //object
        name: "hitesh",
        age: 21,

    }


    const myFunction = function(){
        console.log("hello world");
    }


    console.log(typeof BigNumber) // here typeof is used to see the data type of the variable BigNumber

     console.log(typeof outsideTemp ); // value comes object even if its null has it cant be changed it gives as an object

      console.log(typeof ScoreValue);   // number



      // all the given data below are considered as an object

      console.log(typeof myFunction);  // gives type function ::::: here too it is object and it also  called as an object function

      console.log(typeof heros);  // object

      console.log(typeof myobj); //objects
