///////////////////////////////////////////////////////////////////////////////
//                             SVG Object Classes                            //
///////////////////////////////////////////////////////////////////////////////

/*
 * This module defines four object classes (one parent, three children) to
 * create small SVG logos with text. The children objects are exported.
 */

// 147 colors named in the SVG specifications, according to
// https://johndecember.com/html/spec/colorsvg.html
// Use for validation when using names (as opposed to hex values) to set colors
const svgColors = [
  'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
];

class Shape {
  constructor(text, textColor, fillColor) {
    this.text = text;
    this.textColor = textColor;
    this.fillColor = fillColor;
    // if the text  t is too long, throw an error
    if (text.length > 3) throw new Error('Logo text cannot be longer than 3 characters');
    // if names are used, check that they are one of the 147 named in the SVG specification
    if (!svgColors.includes(textColor.toLowerCase()) && !textColor.includes('#')) {
      throw new Error('Text color name not recognized')
    };
    if (!svgColors.includes(fillColor.toLowerCase()) && !fillColor.includes('#')) {
      throw new Error('Shape color name not recognized')
    };
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
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}"/>`
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
    return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}"/>`
  }
  svgText() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
  }
}

module.exports = { Circle, Square, Triangle, svgColors };
