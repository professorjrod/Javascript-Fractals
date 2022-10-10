function setup() {
    createCanvas(1000, 1000);
    pixelDensity(1);
    loadPixels();
    for (let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            let fx = (x + y * width) * 4;
            pixels[fx + 0] = 255;
            pixels[fx + 1] = 51;
            pixels[fx + 2] = 51;
            pixels[fx + 3] = 255;
        }
    }
    updatePixels();
}

