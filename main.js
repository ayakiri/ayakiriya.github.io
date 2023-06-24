document.addEventListener("DOMContentLoaded", function() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var cvData = JSON.parse(this.responseText);
      displayCV(cvData);
    }
  };
  xmlhttp.open("GET", "cv.json", true);
  xmlhttp.send();
});

function displayCV(cvData) {
  var cvElement = document.getElementById("cv");
  var loadingElement = document.getElementById("loading");
  
  loadingElement.style.display = "none";
  cvElement.style.display = "block";
  
  var html = "<h2>Introduction</h2>";
  html += "<p>" + cvData.introduction + "</p>";
  
  html += "<h2>Education</h2>";
  html += "<ul>";
  for (var i = 0; i < cvData.education.length; i++) {
    html += "<li>" + cvData.education[i] + "</li>";
  }
  html += "</ul>";
  
  html += "<h2>Experience</h2>";
  html += "<ul>";
  for (var i = 0; i < cvData.experience.length; i++) {
    html += "<li>" + cvData.experience[i] + "</li>";
  }
  html += "</ul>";
  
  html += "<h2>Projects</h2>";
  html += "<ul>";
  for (var i = 0; i < cvData.projects.length; i++) {
    html += "<li>" + cvData.projects[i] + "</li>";
  }
  html += "</ul>";
  
  html += "<h2>Skills</h2>";
  html += "<h3>Hard Skills</h3>";
  html += "<ul>";
  for (var i = 0; i < cvData.skills.hard.length; i++) {
    html += "<li>" + cvData.skills.hard[i] + "</li>";
  }
  html += "</ul>";
  
  html += "<h3>Soft Skills</h3>";
  html += "<ul>";
  for (var i = 0; i < cvData.skills.soft.length; i++) {
    html += "<li>" + cvData.skills.soft[i] + "</li>";
  }
  html += "</ul>";
  
  html += "<h2>Languages</h2>";
  html += "<ul>";
  for (var i = 0; i < cvData.languages.length; i++) {
    html += "<li>" + cvData.languages[i] + "</li>";
  }
  html += "</ul>";
  
  html += "<h2>Certificates</h2>";
  html += "<ul>";
  for (var i = 0; i < cvData.certificates.length; i++) {
    html += "<li>" + cvData.certificates[i] + "</li>";
  }
  html += "</ul>";
  
  cvElement.innerHTML = html;
}
