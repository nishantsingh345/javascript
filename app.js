//  :-  a function along with a refrence to its outer enviornment like together forms a clouser

function outer() {
  var a = 20;
  function inner() {
    console.log(a);
  }

  return inner;
}

outer()();

// data hiding ;- we want some data privacy on any data so other function and other code cannot accees them

function counter() {
  var count = 0;
  function incrementcounter() {
    count++;
    console.log(count);
  }
  return incrementcounter;
}

var counts = counter();
counts();
counts();
counts();
counts();

//Remove duplicate value in array

const value = [1, 2, 3, 1, 2];

const b = [];

value.filter((dup) => {
  if (b.indexOf(value[dup]) == -1) {
    b.push(value[dup]);
  }
});

console.log(b);

demo = document.getElementById("demo").innerHTML = "Hello Nishant";
