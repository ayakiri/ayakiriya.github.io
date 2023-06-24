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
  $('nav a').click(function(e) {
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
      var dataKey = sectionId.replace('-', '_');
      sectionContent.text(data[dataKey]);
    });
  }

  // Ukryj wszystkie sekcje po załadowaniu strony
  hideAllSections();
});
