$(document).ready(function() {
  // Function to hide all sections
  function hideAllSections() {
    $('.content section').hide();
  }

  // Fetch data on initial load
  $.getJSON('cv.json', function(data) {
    $('#about-me-content').text(data.about_me);
  });

  // Handling section clicks
  $('.nav-link').click(function(e) {
    e.preventDefault();
    var sectionId = $(this).attr('href').substring(1); // Get section ID without '#'

    // Hide all sections
    hideAllSections();

    // Show only the selected section
    $('#' + sectionId).show();

    // Load data for the selected section
    loadData(sectionId);
  });

  // Function to load data for a specific section
  function loadData(sectionId) {
    $.getJSON('cv.json', function(data) {
      var sectionContent = $('#' + sectionId + '-content');

      switch (sectionId) {
        case 'about-me':
          sectionContent.text(data.about_me);
          break;

        case 'education':
          var educationContent = '';
          data.education.forEach(function(edu) {
            educationContent += '<div class="education-item">' +
              '<h3>' + edu.name + '</h3>' +
              '<p class="date">' + edu.dates + '</p>' +
              '<p>' + edu.description + '</p>' +
              '</div>';
          });
          sectionContent.html(educationContent);
          break;

        case 'projects':
          var projectsContent = '';
          data.projects.forEach(function(proj) {
            projectsContent += '<div class="project-item">' +
              '<h3>' + proj.name + '</h3>' +
              '<p class="date">' + proj.dates + '</p>' +
              '<p>' + proj.description + '</p>' +
              '</div>';
          });
          sectionContent.html(projectsContent);
          break;

        case 'experience':
          var experienceContent = '';
          data.experience.forEach(function(exp) {
            experienceContent += '<div class="experience-item">' +
              '<h3>' + exp.title + '</h3>' +
              '<p class="date">' + exp.dates + '</p>' +
              '<p>' + exp.description + '</p>' +
              '</div>';
          });
          sectionContent.html(experienceContent);
          break;

        case 'skills':
          var skillsContent = '';
          data.skills.forEach(function(skill) {
            skillsContent += '<p>' + skill + '</p>';
          });
          sectionContent.html(skillsContent);
          break;

        case 'languages':
          var languagesContent = '';
          data.languages.forEach(function(lang) {
            languagesContent += '<div class="language-item">' +
              '<p class="language">' + lang.language + '</p>' +
              '<p class="level">' + lang.proficiency + '</p>' +
              '</div>';
          });
          sectionContent.html(languagesContent);
          break;

        case 'certifications':
          var certificationsContent = '';
          data.certifications.forEach(function(cert) {
            certificationsContent += '<div class="certification-item">' +
              '<h3>' + cert.name + '</h3>' +
              '<p>' + cert.date + '</p>' +
              '</div>';
          });
          sectionContent.html(certificationsContent);
          break;

        default:
          sectionContent.text('No data available.');
          break;
      }
    });
  }

  // Hide all sections on page load
  hideAllSections();
});
