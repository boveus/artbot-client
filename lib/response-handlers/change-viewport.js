const $ = require('jquery')

$(document).on({
  change: function (event) {
    console.log($('#viewport-shape').val())
  }
}, '#viewport-shape')
