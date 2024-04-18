// accordian jquery
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
  // auto complete jquery
var availableTags = [
 "Digital marketing",
 "Full stack web developement",
 "Graphics design",
 "UI & UX design",
 "SEO"
];
$( "#course" ).autocomplete({
  source: availableTags
});

  $( "#dialog" ).dialog();


} );

