$(document).ready(function() {
  function hideAllSections() {
    $('.content section').hide();
  }

  $.getJSON('cv.json', function(data) {
    $('#about-me-content').text(data.about_me);
  });


  function loadAboutMeContent(data) {
    $('#about-me-content').text(data.about_me);
  }
    
  function loadEducationContent(data) {
    var educationContent = '';
    data.education.forEach(function(edu) {
    educationContent += '<div class="education-item">' +
    '<h3>' + edu.name + '</h3>' +
    '<p class="date">' + edu.dates + '</p>' +
    '<p>' + edu.course + '</p>' +
    '<ul>';
    edu.extra_info.forEach(function(info) {
    educationContent += '<li>' + info + '</li>';
    });
    educationContent += '</ul></div>';
    });
    $('#education-content').html(educationContent);
  }
  
  function loadProjectsContent(data) {
    var projectsContent = '';
    data.projects.forEach(function(proj) {
    projectsContent += '<div class="project-item">' +
    '<h3>' + proj.name + '</h3>' +
    '<p class="date">' + proj.dates + '</p>' +
    '<p>' + proj.link + '</p>' +
    '<ul>';
    proj.extra_info.forEach(function(info) {
    projectsContent += '<li>' + info + '</li>';
    });
    projectsContent += '</ul></div>';
    });
    $('#projects-content').html(projectsContent);
  }
  
  function loadExperienceContent(data) {
    var experienceContent = '';
    data.experience.forEach(function(exp) {
    experienceContent += '<div class="experience-item">' +
    '<h3>' + exp.title + '</h3>' +
    '<p class="date">' + exp.dates + '</p>' +
    '<p>' + exp.position + '</p>' +
    '<ul>';
    exp.extra_info.forEach(function(info) {
    experienceContent += '<li>' + info + '</li>';
    });
    experienceContent += '</ul></div>';
    });
    $('#experience-content').html(experienceContent);
  }
  
  function loadSkillsContent(data) {
    var skillsContent = '<div class="hard-skills"><h4>Hard Skills:</h4><ul>';
    data.skills[0].hard_skills.forEach(function(skill) {
    skillsContent += '<li>' + skill + '</li>';
    });
    skillsContent += '</ul></div><div class="soft-skills"><h4>Soft Skills:</h4><ul>';
    data.skills[0].soft_skills.forEach(function(skill) {
    skillsContent += '<li>' + skill + '</li>';
    });
    skillsContent += '</ul></div>';
    $('#skills-content').html(skillsContent);
  }
  
  function loadLanguagesContent(data) {
    var languagesContent = '';
    data.languages.forEach(function(lang) {
    languagesContent += '<div class="language-item">' +
    '<p class="language">' + lang.language + '</p>' +
    '<p class="level">' + lang.proficiency + '</p>' +
    '</div>';
    });
    $('#languages-content').html(languagesContent);
  }
  
  function loadCertificationsContent(data) {
    var certificationsContent = '';
    data.certifications.forEach(function(cert) {
    certificationsContent += '<div class="certification-item">' +
    '<h3>' + cert.name + '</h3>' +
    '<p>' + cert.date + '</p>' +
    '<p>' + cert.examinator + '</p>' +
    '</div>';
    });
    $('#certifications-content').html(certificationsContent);
  }

  function loadData(sectionId) {
    $.getJSON('cv.json', function(data) {
      var sectionContent = $('#' + sectionId + '-content');

      switch (sectionId) {
        case 'about-me':
          sectionContent.text(data.about_me);
          break;

          case 'education':
            loadEducationContent(data);
            break;
      
          case 'projects':
            loadProjectsContent(data);
            break;
      
          case 'experience':
            loadExperienceContent(data);
            break;
      
          case 'skills':
            loadSkillsContent(data);
            break;
      
          case 'languages':
            loadLanguagesContent(data);
            break;
      
          case 'certifications':
            loadCertificationsContent(data);
            break;
      
          default:
            $('#'+sectionId+'-content').text('No data available.');
            break;
        }
      });
      
  }

  $.getJSON('cv.json', function(data) {
    loadAboutMeContent(data);
    });
    
    $('.nav-link').click(function(e) {
    e.preventDefault();
    var sectionId = $(this).attr('href').substring(1);
    hideAllSections();
    $('#' + sectionId).show();
    loadData(sectionId);
    });
    
    hideAllSections();
});
