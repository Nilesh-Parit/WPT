

const student = {
    name: "Anshu Jaiswal",
    rollno: 14,
    marks: 70
  };
  

  let cloneStudent = { ...student };

cloneStudent.marks = 80


console.log("student")
console.log(student); 
console.log("Student after cloning")
console.log(cloneStudent); 
