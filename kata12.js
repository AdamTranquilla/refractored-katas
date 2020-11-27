const organizeInstructors = (teacher) => {
  newObj = {};
  for (let i = 0; i < teacher.length; i++) {
    if (!newObj[teacher[i].course]) { 
      newObj[teacher[i].course] = [teacher[i].name] 
    } else {
      newObj[teacher[i].course].push(teacher[i].name)
    }
  }
  return newObj
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));