///////////////////////////////////////////////////////////////////////////////
//                             SVG Logo Generator                            //
///////////////////////////////////////////////////////////////////////////////

/**
 * This program gathers input from the user (terminal interface) and generates
 * the corresponding SVG logo
 **/

// import shapes, inquirer, fs (promise version)
const { Circle, Square, Triangle } = require('./lib/shapes')
const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');

// names for all 147 defined CSS/SVG colors for validation
const svgColors = [
  'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
];

// main function run when node index is input at CL
function run() {
  const prompt = {
    logoChars: "What text (max 3 chars) do you want in your logo?",
    textColor: "Enter text color by name or hex (johndecember.com/html/spec/colorsvg.html)",
    shape: "What shape do you want for your logo?",
    shapeColor: "Enter shape color by name or hex (johndecember.com/html/spec/colorsvg.html)"
  };
  inquirer.prompt([
    { // text in logo
      type: 'input', name: 'logoChars', message: prompt.logoChars,
      validate: value => {
        if (value.length > 3) return "No more than three characters allowed";
        else return true;
      }
    },
    { // color of the text
      type: 'input', name: 'textColor', message: prompt.textColor,
      validate: value => { // test for valid name; exclude hex values
        if (!svgColors.includes(value) && !value.includes('#')) return "I don't recognize that color name"
        else return true;
      }
    },
    { // logo shape: circle, square, triangle
      type: 'list', name: 'shape', message: prompt.shape,
      choices: ['circle', 'square', 'triangle']
    },
    { // logo fill color
      type: 'input', name: 'shapeColor', message: prompt.shapeColor,
      validate: value => { // test for valid name; exclude hex values
        if (!svgColors.includes(value) && !value.includes('#')) return "I don't recognize that color name"
        else return true;
      }
    }
  ]).then(generateSVG)
    .then(output => {
      writeFile('logo.svg', output);
      console.log('Generated logo.svg')
    })
    .catch(err => console.log(err));
}

// function to generate SVG text from the user input
// input is the data object (resolved promise) gathered by inquirer
function generateSVG({ logoChars, textColor, shape, shapeColor }) {
  let logo;
  switch (shape) {
    // object depends on user choice of shape
    case 'circle':
      logo = new Circle(logoChars, textColor, shapeColor);
      break;
    case 'square':
      logo = new Square(logoChars, textColor, shapeColor);
      break;
    case 'triangle':
      logo = new Triangle(logoChars, textColor, shapeColor);
      break;
  }
  const output = `
${logo.svgOpen()}
  ${logo.render()}
  ${logo.svgText()}
${logo.svgClose()}
`
  return output;
}

// run the main program
run();
