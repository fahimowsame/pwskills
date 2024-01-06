const students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
];

function checkResults(name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name && students[i].marks > 90) {
            console.log(`Congratulations ${name}, you have passed the exam.`);
            return;
        } 
        else if (students[i].name === name) {
            console.log(`Sorry ${name}, you did not pass the exam.`);
            return;
        }
    }
    console.log(`${name} is not in the student list.`);
}
  


checkResults("Mithun");

checkResults("Prabir");

checkResults("Mithun S");

