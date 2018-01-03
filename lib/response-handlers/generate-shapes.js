import { circleHtml } from '../generate-shapes/circle-html.js'
import { rectangleHtml } from '../generate-shapes/rectangle-html.js'
import { lineHtml } from '../generate-shapes/line-html.js'
import { polylineHtml } from '../generate-shapes/polyline-html.js'

const $ = require('jquery')

$(document).ready(() => {
  $(document).on({
    click: function (event) {
      let circle = circleHtml()
      $('#main-svg').append(circle)
      $('#svg-area').html($('#svg-area').html())
    }
  }, '#make-circle')

  $(document).on({
    click: function (event) {
      let rectangle = rectangleHtml()
      $('#main-svg').append(rectangle)
      $('#svg-area').html($('#svg-area').html())
    }
  }, '#make-rectangle')

  $(document).on({
    click: function (event) {
      let line = lineHtml()
      $('#main-svg').append(line)
      $('#svg-area').html($('#svg-area').html())
    }
  }, '#make-line')

  $(document).on({
    click: function (event) {
      let polyline = polylineHtml()
      $('#main-svg').append(polyline)
      $('#svg-area').html($('#svg-area').html())
    }
  }, '#make-polyline')

  $(document).on({
    click: function (event) {
      $('#main-svg').empty()
    }
  }, '#clear-canvas')

  $(document).on({
    click: function (event) {
      let shapeArray = [polylineHtml(), lineHtml(), rectangleHtml(), circleHtml()]
      let randomNumber = Math.floor(Math.random() * shapeArray.length)
      let shape = shapeArray[randomNumber]
      $('#main-svg').append(shape)
      $('#svg-area').html($('#svg-area').html())
    }
  }, '#question-mark')

  $(document).on({
    change: function (event) {
      console.log($('#randomness-slider').val())
    }
  }, '#randomness-slider')
})
