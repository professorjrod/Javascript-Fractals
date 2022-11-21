let maxSlider;
let minSlider;

function setup() {
  //255 is the best for performance/size
  createCanvas(250, 250);
  pixelDensity(1);
  let minVal = -2.5;
  let maxVal = 2.5;

  //I've found -2.45 and 2.45 to be the best initial values for the mandelbrot set
  minSlider = createSlider(-2.45, 0, minVal, 0.01);
  maxSlider = createSlider(0, 2.45, maxVal, 0.01);
}
function draw() {
  let maxIterations = 100;
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = map(x, 0, width, minSlider.value(), maxSlider.value());
      let b = map(y, 0, width, minSlider.value(), maxSlider.value());

      let ca = a;
      let cb = b;
      let n = 0;

      while (n < maxIterations) {
        //i is negative so its -b^2 not +b^2
        let aa = a * a - b * b;
        let bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;

        if (abs(a + b) > 16) {
          break;
        }
        n++;
      }

      let brightness = map(n, 0, maxIterations, 0, 255);

      if (n === maxIterations) {
        brightness = 0;
      }

      let pix = (x + y * width) * 4;
      pixels[pix + 0] = brightness;
      pixels[pix + 1] = brightness;
      pixels[pix + 2] = brightness;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}
