(function($) {

  var Divy = {};

  Divy.create = function(bitmap) {
    var container, row, div, overlay, color;

    container = this;

    for (var i = 0; i < bitmap.length; i++) {
      row = bitmap[i];

      for (var n = 0; n < row.length; n++) {
        color = row[n];

        // Div.
        div = document.createElement('div');
        div.className = 'divy-div';
        div.style.width  = (100 / row.length) + '%';
        div.style.height = (100 / bitmap.length) + '%';
        div.style.float  = 'left';
        div.style.backgroundColor = color;

        // Overlay.
        overlay = document.createElement('div');
        overlay.className = 'divy-overlay';
        overlay.style.width  = '100%';
        overlay.style.height = '100%';

        // Add them to the containing element.
        // Only selects the first element.
        div.appendChild(overlay);
        container.append(div);
      };

    };
  }

  // Export "Divy" to jQuery.
  $.fn.divy = Divy.create;

}(jQuery));
