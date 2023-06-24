// script.js
$(document).ready(function() {
  // Pobierz dane z pliku JSON
  $.getJSON('cv.json', function(data) {
    // Uzupełnij sekcję "Kim jestem"
    $('#kim-jestem-content').text(data.kim_jestem);

    // Uzupełnij sekcję "Edukacja"
    var edukacjaList = $('#edukacja-list');
    $.each(data.edukacja, function(index, item) {
      var listItem = $('<li>').text(item);
      edukacjaList.append(listItem);
    });

    // Uzupełnij sekcję "Projekty"
    var projektyList = $('#projekty-list');
    $.each(data.projekty, function(index, item) {
      var listItem = $('<li>').text(item);
      projektyList.append(listItem);
    });

    // Uzupełnij sekcję "Doświadczenie"
    var doswiadczenieList = $('#doswiadczenie-list');
    $.each(data.doswiadczenie, function(index, item) {
      var listItem = $('<li>').text(item);
      doswiadczenieList.append(listItem);
    });

    // Uzupełnij sekcję "Umiejętności"
    var umiejetnosciList = $('#umiejetnosci-list');
    $.each(data.umiejetnosci, function(index, item) {
      var listItem = $('<li>').text(item);
      umiejetnosciList.append(listItem);
    });

    // Uzupełnij sekcję "Języki"
    var jezykiList = $('#jezyki-list');
    $.each(data.jezyki, function(index, item) {
      var listItem = $('<li>').text(item);
      jezykiList.append(listItem);
    });

    // Uzupełnij sekcję "Certyfikaty"
    var certyfikatyList = $('#certyfikaty-list');
    $.each(data.certyfikaty, function(index, item) {
      var listItem = $('<li>').text(item);
      certyfikatyList.append(listItem);
    });
  });
});
