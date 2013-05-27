(function($) {

  var Divy = {};

  Divy.create = function(bitmap, options) {
    var container, row, div, overlay, color;

    // Default options.
    options = (typeof options === 'undefined') ? {} : options

    // If the fixed option is set, append another container div to
    // the selected element to constrain proportions.
    if (options['ratio'] == 'fixed') {
      container = Divy.fixed(this, bitmap.length / bitmap[0].length);
    } else {
      container = this;
    }

    for (var i = 0; i < bitmap.length; i++) {
      row = bitmap[i];

      for (var n = 0; n < row.length; n++) {
        color = row[n];

        // Div.
        div = document.createElement('div');
        div.className = 'divy-div';
        div.style.width  = (100 / row.length) + '%';
        div.style.height = (100 / bitmap.length) + '%';
        div.style.cssFloat  = 'left';
        div.style.backgroundColor = color;

        // Overlay.
        overlay = document.createElement('div');
        overlay.className = 'divy-overlay';
        overlay.style.width  = '100%';
        overlay.style.height = '100%';

        // Add the pixel div and it's overlay to the
        // containing div.
        div.appendChild(overlay);
        container.append(div);
      };

    };
  }

  // ratio is height / width
  Divy.fixed = function(selection, ratio) {
    selection.css('position', 'relative');
    selection.css('padding-top', ratio * 100 + '%');

    var container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top      = 0;
    container.style.bottom   = 0;
    container.style.right    = 0;
    container.style.left     = 0;

    selection.append(container);
    return $(container);
  }

  // Export "Divy" to jQuery.
  $.fn.divy = Divy.create;

}(jQuery));
