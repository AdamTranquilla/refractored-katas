const instructorWithLongestName = function (instructors) {
  let longestName = [];
  let instructorReturned;
  for (let i = 0; i < instructors.length; i++) {

    if (instructors[i].name.length > longestName.length) {
      longestName = instructors[i].name
      instructorReturned = instructors[i]
    }
  }
  return instructorReturned;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));