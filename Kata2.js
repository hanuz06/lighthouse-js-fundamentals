const conditionalSum = function (values, condition) {
  return condition === "even" ? values.filter(numEven) : values.filter(numOdd);

  function numEven(num) {
    return !(num % 2);
  };

  function numOdd(num) {
    return num % 2;
  }
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));