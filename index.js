/*
 * Functionality:
 * - prompts user for input: text (up to 3 chars), text color, shape, chape color
 * - based on input, a 300 x 200 pixel SVG file is created named "logo.svg"
 * - when finished, display message "Generated logo.svg" on CL
 */

// TODO import inquirer, shapes, fs (promise version)
const shapes = require('./lib/shapes')


// get input from user
// eventually want to give them drop-down auto-complete functionality if at all possible

// strictly for testing purposes
const logoInput = {
  logoChars: "LOL",
  textColor: "white",
  shapeColor: "darkblue",
  shape: "circle" // options are circle, triangle, square
};


// then use the input to build the shape (need to import the shapes module)
// shape is rendered ihe shapes.js functionality and returned here
// then it is output to a file

const logo = new shapes.Triangle("CLS", "cyan", "darkblue");
const output = `
${logo.svgOpen()}
${logo.render()}
${logo.svgText()}
${logo.svgClose()}
`

console.log(output);
