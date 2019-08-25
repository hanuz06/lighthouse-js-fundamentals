function whichSchool(age) {
  if (age < 13) {
    let school = "Elementary School";
    return school;
  } else if (age >= 13 && age < 18) {
    let school = "Secondary School";
    return school;
  } else {
    let school = "Lighthouse Labs";
    return school;
  }
};

console.log(whichSchool(25));