// script.js
$(document).ready(function() {
  // Funkcja do ukrywania wszystkich sekcji
  function hideAllSections() {
    $('.content section').hide();
  }

  // Pobierz dane na początku
  $.getJSON('cv.json', function(data) {
    $('#kim-jestem-content').text(data.kim_jestem);
  });

  // Obsługa kliknięcia sekcji
    $('.nav-link').click(function(e) {
      e.preventDefault();
      var sectionId = $(this).attr('href').substring(1); // Pobierz ID sekcji bez '#'

      // Ukryj wszystkie sekcje
      hideAllSections();

      // Pokaż tylko wybraną sekcję
      $('#' + sectionId).show();

      // Wczytaj dane dla wybranej sekcji
      loadData(sectionId);
    });

  // Funkcja do wczytywania danych dla danej sekcji
  function loadData(sectionId) {
    $.getJSON('cv.json', function(data) {
      var sectionContent = $('#' + sectionId + '-content');

      switch (sectionId) {
        case 'kim-jestem':
          sectionContent.text(data.kim_jestem);
          break;

        case 'edukacja':
          var educationContent = '';
          data.edukacja.forEach(function(edu) {
            educationContent += '<div class="education-item">' +
              '<h3>' + edu.name + '</h3>' +
              '<p class="date">' + edu.dates + '</p>' +
              '<p>' + edu.description + '</p>' +
              '</div>';
          });
          sectionContent.html(educationContent);
          break;
    
        case 'projekty':
          var projectsContent = '';
          data.projekty.forEach(function(proj) {
            projectsContent += '<div class="project-item">' +
              '<h3>' + proj.name + '</h3>' +
              '<h4>' + proj.second_name + '</h4>' +
              '<p><a href="' + proj.link + '">' + proj.link + '</a></p>' +
              '<p>' + proj.description + '</p>' +
              '</div>';
          });
          sectionContent.html(projectsContent);
          break;
    
        case 'doswiadczenie':
          var experienceContent = '';
          data.doswiadczenie.forEach(function(exp) {
            experienceContent += '<div class="experience-item">' +
              '<h3>' + exp.name + '</h3>' +
              '<h4>' + exp.second_name + '</h4>' +
              '<p class="date">' + exp.dates + '</p>' +
              '<p>' + exp.description + '</p>' +
              '</div>';
          });
          sectionContent.html(experienceContent);
          break;
    
        case 'umiejetnosci':
          var skillsContent = '';
          data.umiejetnosci.forEach(function(skill) {
            skillsContent += '<p>' + skill + '</p>';
          });
          sectionContent.html(skillsContent);
          break;
    
        case 'jezyki':
          var languagesContent = '';
          data.jezyki.forEach(function(lang) {
            languagesContent += '<div class="language-item">' +
              '<p class="language">' + lang.lang + '</p>' +
              '<p class="level">' + lang.level + '</p>' +
              '</div>';
          });
          sectionContent.html(languagesContent);
          break;
    
        case 'certyfikaty':
          var certificationsContent = '';
          data.certyfikaty.forEach(function(cert) {
            certificationsContent += '<div class="certification-item">' +
              '<h3>' + cert.name + '</h3>' +
              '<p>' + cert.details + '</p>' +
              '</div>';
          });
          sectionContent.html(certificationsContent);
          break;
    
        default:
          sectionContent.text('Brak danych.');
          break;
      }
    });
  }

  // Ukryj wszystkie sekcje po załadowaniu strony
  hideAllSections();
});
