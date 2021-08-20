/* It allows 2 incompatible classes/interface to communicate, with this we can convert the interface of a object to a different form */
// want to apply my filter (vivid) as well as 3rd party filter(caramel) which may have different interface
class MyImage {
}
class VividFilter {
    applyFilter(image) {
        console.log("Vivid Filter Applied");
    }
}
// 3rd party filter library may have different interface
class CaramelFilter {
    init() {
        console.log("Preparing image to apply caramel filter...");
    }
    render(image) {
        console.log("Caramel Filter Applied");
    }
}
// To match with our existing MyFilter interface to work with ImagePreview class we need to change CaramelFilter interface into a different interface
class CaramelFilterAdapter {
    constructor(caramel) {
        this.caramel = caramel;
    }
    applyFilter(image) {
        this.caramel.init();
        this.caramel.render(image);
    }
}
// preview different filters
class ImagePreview {
    constructor(image) {
        this.image = image;
    }
    apply(filter) {
        filter.applyFilter(this.image);
    }
}
const imagePreview = new ImagePreview(new MyImage());
imagePreview.apply(new VividFilter());
imagePreview.apply(new CaramelFilterAdapter(new CaramelFilter()));
