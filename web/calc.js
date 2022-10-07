const calculator = {
  add: function(a, b) {
    console.log(a + b);
  },
  abstract: function(a, b) {
    console.log(a - b);
  },
  powerOf: function(a, b) {
    console.log(a ** b);
  },
  divide: function(a, b) {
    console.log(a / b);
  },
  multiple: function(a, b) {
    console.log(a * b);
  }
}

calculator.add(1, 4);
calculator.abstract(1, 4);
calculator.powerOf(1, 4);
calculator.divide(1, 4);
calculator.multiple(2, 4);
