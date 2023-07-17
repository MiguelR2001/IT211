var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

// Function to display student data
function displayStudentData() {
    // Split the grades string into an array of students
    let students = grades.split(", ");
  
    let totalStudents = students.length;
    let lowestScore = Infinity;
    let highestScore = -Infinity;
    let totalScore = 0;
  
    // Sort the students array alphabetically by name
    students.sort(function(a, b) {
      let nameA = a.split("|")[0].toLowerCase();
      let nameB = b.split("|")[0].toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  
    // Get the table body
    let tableBody = document.querySelector("#studentTable tbody");
  
    // Loop through each student
    for (let i = 0; i < students.length; i++) {
      // Split the student string into name and score
      let student = students[i].split("|");
      let name = student[0];
      let score = parseInt(student[1]);
  
      // Capitalize the first letter of the student name
      let capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  
      // Create a table row for the student
      let row = document.createElement("tr");
  
      // Create table cells for the name and score
      let nameCell = document.createElement("td");
      nameCell.textContent = capitalized;
      let scoreCell = document.createElement("td");
      scoreCell.textContent = score;
  
      // Append the cells to the row
      row.appendChild(nameCell);
      row.appendChild(scoreCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
  
      // Update lowest and highest scores
      if (score < lowestScore) {
        lowestScore = score;
      }
      if (score > highestScore) {
        highestScore = score;
      }
  
      // Calculate the total score
      totalScore += score;
    }
  
    // Calculate the average score
    let averageScore = totalScore / totalStudents;
  
    // Display the total number of students
    let totalStudentsElement = document.createElement("p");
    totalStudentsElement.textContent = "Total students: " + totalStudents;
    document.body.appendChild(totalStudentsElement);
  
    // Display the lowest, highest, and average scores
    let lowestScoreElement = document.createElement("p");
    lowestScoreElement.textContent = "Lowest score: " + lowestScore;
    document.body.appendChild(lowestScoreElement);
  
    let highestScoreElement = document.createElement("p");
    highestScoreElement.textContent = "Highest score: " + highestScore;
    document.body.appendChild(highestScoreElement);
  
    let averageScoreElement = document.createElement("p");
    averageScoreElement.textContent = "Average score: " + averageScore.toFixed(2);
    document.body.appendChild(averageScoreElement);
  }
  