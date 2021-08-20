/* It allows 2 incompatible classes/interface to communicate, with this we can convert the interface of a object to a different form */

// want to apply my filter (vivid) as well as 3rd party filter(caramel) which may have different interface
class MyImage {}

interface MyFilter {
  applyFilter(image: MyImage): void;
}

class VividFilter implements MyFilter {
  applyFilter(image: MyImage): void {
    console.log("Vivid Filter Applied");
  }
}

// 3rd party filter library may have different interface
class CaramelFilter {
  init() {
    console.log("Preparing image to apply caramel filter...");
  }
  render(image: MyImage) {
    console.log("Caramel Filter Applied");
  }
}

// To match with our existing MyFilter interface to work with ImagePreview class we need to change CaramelFilter interface into a different interface
class CaramelFilterAdapter implements MyFilter {
  caramel: CaramelFilter;
  constructor(caramel: CaramelFilter) {
    this.caramel = caramel;
  }
  applyFilter(image: MyImage): void {
    this.caramel.init();
    this.caramel.render(image);
  }
}

// preview different filters
class ImagePreview {
  image: MyImage;
  constructor(image: MyImage) {
    this.image = image;
  }
  apply(filter: MyFilter) {
    filter.applyFilter(this.image);
  }
}

const imagePreview: ImagePreview = new ImagePreview(new MyImage());
imagePreview.apply(new VividFilter());
imagePreview.apply(new CaramelFilterAdapter(new CaramelFilter()));
