let repeatNumbers = function (data) {
  let result = [];
  for (var i = 0; i < data.length; i++) {    
    a = data[i][0].toString();
    b = data[i][1].toString();  
    result.push(a.repeat(b))  
  }
  return result.toString();
};

console.log(repeatNumbers([
  [1, 10]
]));
console.log(repeatNumbers([
  [1, 2],
  [2, 3]
]));
console.log(repeatNumbers([
  [10, 4],
  [34, 6],
  [92, 2]
]));