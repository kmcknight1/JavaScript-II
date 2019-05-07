// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function add () {
  let x = 6;
  let y = 2; 
  let sum = x+y;
  console.log(sum);
  console.log(`I can access x(${x}), y(${y}), & sum(${sum}).`);

  subtractX();

  function subtractX () {
    let lessX = sum - x;
    console.log(lessX);
    console.log(`I can access x(${x}), y(${y}), sum(${sum}), and lessX(${lessX}).`);

    function subtractY () {
      let lessY = sum - y;
      console.log(lessY);
      console.log(`I can access x(${x}), y(${y}), sum(${sum}), lessX(${lessX}), and lessY(${lessY}).`);
    }

    subtractY();
  }

}

add();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
  // Return a function that when invoked increments and returns a counter variable.

let count = 0;

const counter = () => {
  return count += 1;
};

counter();
counter();
counter();

console.log(count);

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  function FactoryObject (counter) {
    this.counter = counter;
  }
  
  let zeroBeginning = new FactoryObject(0);
  
  FactoryObject.prototype.increment = function(){
    return this.counter+=1;
  }
  
  FactoryObject.prototype.decrement = function(){
    return this.counter--;
  }
  
  console.log(zeroBeginning);
  zeroBeginning.increment();
  zeroBeginning.increment();
  zeroBeginning.increment();
  console.log(zeroBeginning);
  zeroBeginning.decrement();
  console.log(zeroBeginning);

