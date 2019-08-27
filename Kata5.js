const urlEncode = function (text) {
  //let arr = text.split(" ");
  return text.trim().replace(/\s+/g, "%20");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));