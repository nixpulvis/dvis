$(function() {
  $('#example').dvis([
    ['orange', 'green', 'pink'],
    ['pink', 'green', 'pink'],
    ['orange', 'pink', 'orange'],
  ]);

  $('#exampleFixed').dvis([
    ['orange', 'green', 'pink'],
    ['pink', 'green', 'pink'],
    ['orange', 'pink', 'orange'],
  ], { 'ratio' : 'fixed' });
});
