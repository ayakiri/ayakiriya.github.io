// script.js
$(document).ready(function() {
  function loadData(sectionId, dataKey) {
    $.getJSON('cv.json', function(data) {
      var sectionContent = $('#' + sectionId + '-content');
      sectionContent.text(data[dataKey]);
    });
  }

  // Pobierz dane na początku
  $.getJSON('cv.json', function(data) {
    $('#kim-jestem-content').text(data.kim_jestem);
  });

  // Obsługa kliknięcia sekcji
  $('nav a').click(function(e) {
    e.preventDefault();
    var sectionId = $(this).attr('href').substring(1); // Pobierz ID sekcji bez '#'
    loadData(sectionId, sectionId.replace('-', '_'));
  });
});
