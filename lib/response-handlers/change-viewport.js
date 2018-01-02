const $ = require('jquery')

$(document).on({
  change: function (event) {
    if ($('#viewport-shape').val() === 'oval') {
      $('#main-svg, #svg-area').addClass('oval')
    } else if ($('#viewport-shape').val() === 'rectangle') {
      $('#main-svg, #svg-area').removeClass('oval')
    }
  }
}, '#viewport-shape')
