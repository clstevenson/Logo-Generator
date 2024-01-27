const { Circle, Square, Triangle } = require('../lib/shapes.js');

// testing the shapes class
describe('Shapes', () => {
  /*
   * First lets test the input validation of the constructor of any Shapes objects
   * The logo text must be 3 chars or less, and if named colors are provided then they
   * must be one of the 147 provided in the SVG specification
   */
  describe('Shapes input argument validation', () => {
    describe('Shapes text', () => {
      it('should throw an error if the logo text is too long', () => {
        const cb = () => new Circle('Hello', 'red', 'blue');  // 3 chars is the max for the first argument
        const err = new Error('Logo text cannot be longer than 3 characters');
        expect(cb).toThrowError(err);
      });
    });
    describe('Shapes text color', () => {
      it('should throw an error if a named text color is not in the SVG specification', () => {
        const cb = () => new Circle('LOL', 'pinkish', 'blue');  // 3 chars is the max for the first argument
        const err = new Error('Text color name not recognized')
        expect(cb).toThrowError(err);
      });
    });
    describe('Shapes fill color', () => {
      it('should throw an error if a named shape color is not in the SVG specification', () => {
        const cb = () => new Circle('LOL', 'blue', 'brownish');  // 3 chars is the max for the first argument
        const err = new Error('Shape color name not recognized')
        expect(cb).toThrowError(err);
      });
    });
  });
  /*
   * Now let's test the render() and svgText() methods for each of the three daughter classes
   */
  describe('Shapes render() method', () => {
    const fillColor = "darkblue";  // use this shape color for all objects
    describe('Circle SVG generation', () => {
      test('Generation of the SVG circle shape', () => {
        const shape = new Circle("LOL", "cyan", fillColor);
        const svg = `<circle cx="150" cy="100" r="80" fill="${fillColor}"/>`
        expect(shape.render()).toEqual(svg);
      });
    });
    describe('Square SVG generation', () => {
      test('Generation of the SVG square shape', () => {
        const shape = new Square("LOL", "cyan", fillColor);
        const svg = `<rect x="70" y="20" width="160" height="160" fill="${fillColor}"/>`
        expect(shape.render()).toEqual(svg);
      });
    });
    describe('Triangle SVG generation', () => {
      test('Generation of the SVG triangle shape', () => {
        const shape = new Triangle("LOL", "cyan", fillColor);
        const svg = `<polygon points="150, 18 244, 182 56, 182" fill="${fillColor}"/>`
        expect(shape.render()).toEqual(svg);
      });
    });
  });
  describe('Shapes svgText() method', () => {
    // use the values below for all tests
    const logoText = "LOL";
    const textColor = "darkblue";
    describe('Circle SVG generation', () => {
      test('Generation of the logo text', () => {
        const shape = new Circle(logoText, textColor, "yellow");
        const svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>`
        expect(shape.svgText()).toEqual(svgText);
      });
    });
    describe('Square SVG generation', () => {
      test('Generation of the logo text', () => {
        const shape = new Square(logoText, textColor, "yellow");
        const svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>`
        expect(shape.svgText()).toEqual(svgText);
      });
    });
    describe('Triangle SVG generation', () => {
      test('Generation of the logo text', () => {
        const shape = new Triangle(logoText, textColor, "yellow");
        const svgText = `<text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>`
        expect(shape.svgText()).toEqual(svgText);
      });
    });
  });
});
