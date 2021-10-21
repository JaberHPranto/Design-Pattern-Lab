class RealEbook {
    constructor(ebook) {
        this.ebook = ebook;
        this.loadEbook();
    }
    loadEbook() {
        console.log(`Loading the book.... ${this.ebook}`);
    }
    showEbook() {
        console.log(`Showing the book : ${this.ebook}`);
    }
    getBookName() {
        return this.ebook;
    }
}
class ProxyEbook {
    constructor(ebook) {
        this.ebook = ebook;
    }
    showEbook() {
        //  if the book is not loaded
        if (this.realEbook == null) {
            this.realEbook = new RealEbook(this.ebook);
            this.realEbook.showEbook();
        }
        else
            this.realEbook.showEbook();
    }
    getBookName() {
        return this.ebook;
    }
}
class Library {
    constructor() {
        this.ebooks = new Map();
    }
    addEbooks(ebook) {
        this.ebooks.set(ebook.getBookName(), ebook);
    }
    openEbook(ebook) {
        // console.log(this.ebooks.get(ebook));
        this.ebooks.get(ebook).showEbook();
    }
}
const library = new Library();
const myBooks = ["Sherlock", "Feluda", "Byomkesh"];
// for (let book of myBooks) {
//   library.addEbooks(new RealEbook(book));
// }
for (let book of myBooks) {
    library.addEbooks(new ProxyEbook(book));
}
library.openEbook("Feluda");
library.openEbook("Sherlock");
library.openEbook("Feluda");
