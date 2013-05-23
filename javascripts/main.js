$(function() {
  $('#example').divy([
    ['orange', 'green', 'pink'],
    ['pink', 'green', 'pink'],
    ['orange', 'pink', 'orange'],
  ]);

  $('#exampleFixed').divy([
    ['orange', 'green', 'pink'],
    ['pink', 'green', 'pink'],
    ['orange', 'pink', 'orange'],
  ], { 'ratio' : 'fixed' });
});
