const instructorWithLongestName = function(instructors) {
  let instructor={
    name:"",
    course:""
  };  
  let length=0;
  for (var i=0; i<instructors.length; i++){
    if (instructors[i].name.length>instructor.name.length){
      instructor.name=instructors[i].name;      
      instructor.course=instructors[i].course;
    }
  }
  return instructor;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
