///////////////////////////////////////////////////////////////////////////////
//                             SVG Object Classes                            //
///////////////////////////////////////////////////////////////////////////////

/*
 * This module defines four object classes (one parent, three children) to
 * create small SVG logos with text. The children objects are exported.
 */

class Shape {
  constructor(text, textColor, fillColor) {
    this.text = text;
    this.textColor = textColor;
    this.fillColor = fillColor;
  }
  svgOpen() {
    return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  }
  svgClose() {
    return '</svg>';
  }
}

class Triangle extends Shape {
  constructor(text, textColor, fillColor) {
    super(text, textColor, fillColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />`
  }
  svgText() {
    return `<text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

class Square extends Shape {
  constructor(text, textColor, fillColor) {
    super(text, textColor, fillColor);
  }
  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.fillColor}"/>`
  }
  svgText() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

class Circle extends Shape {
  constructor(text, textColor, fillColor) {
    super(text, textColor, fillColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`
  }
  svgText() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

module.exports = { Circle, Square, Triangle };
