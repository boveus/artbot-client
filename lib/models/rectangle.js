import { getRandomRgb } from '../helpers/random-color.js'

class Rectangle {
  constructor () {
    let attributes = ['x', 'y', 'width', 'height']

    this.x = Math.floor(Math.random() * 500) + 1
    this.y = Math.floor(Math.random() * 500) + 1
    this.height = Math.floor(Math.random() * 1500) + 1
    this.width = Math.floor(Math.random() * 1500) + 1
    this.stroke = getRandomRgb()
    this.stroke_width = Math.floor(Math.random() * 5) + 1
    this.fill = getRandomRgb()
    this.opacity = Math.random()
    this.animation_attr = attributes[(Math.floor(Math.random() * 3) + 1)]
    this.animation_from = Math.floor(Math.random() * 500) + 1
    this.animation_to = Math.floor(Math.random() * 500) + 1
    this.animation_dur = Math.floor(Math.random() * 120) + 1
    this.animation_repeat = Math.floor(Math.random() * 120) + 1
    this.animated = false
  }
}

export { Rectangle }
