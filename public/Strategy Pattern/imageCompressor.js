/* Before storing the image we need to compress it (like in png/jpg) and apply filter(like Black&White/High contrast) , So in runtime we have to choose which compressor or filter we gonna use, we have to make a strategy to store image. Basically in this, different object behaves differently based on different strategy */
class PngCompressor {
    compress() {
        console.log("Compressed in PNG format");
    }
}
class JpegCompressor {
    compress() {
        console.log("Compressed in Jpeg format");
    }
}
class BlackWhite {
    applyFilter() {
        console.log("Black and White filter Applied");
    }
}
class HighContrast {
    applyFilter() {
        console.log("High Contrast filter Applied");
    }
}
// Main Class - Image Storing
class ImageStorage {
    storeImage(filename, compressor, filter) {
        this.file = filename;
        this.filter = filter;
        this.compressor = compressor;
        this.displayInfo();
    }
    displayInfo() {
        console.log(`
        --- File Information ---
        File Name : ${this.file}
        `);
        this.compressor.compress();
        this.filter.applyFilter();
    }
}
const iStore = new ImageStorage();
iStore.storeImage("My Image", new PngCompressor(), new BlackWhite());
