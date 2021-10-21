interface Ebook {
  showEbook(): void;
  getBookName(): string;
}

class RealEbook implements Ebook {
  private ebook: string;
  constructor(ebook: string) {
    this.ebook = ebook;
    this.loadEbook();
  }
  loadEbook(): void {
    console.log(`Loading the book.... ${this.ebook}`);
  }
  showEbook(): void {
    console.log(`Showing the book : ${this.ebook}`);
  }
  getBookName(): string {
    return this.ebook;
  }
}

class ProxyEbook implements Ebook {
  private ebook: string;
  realEbook: RealEbook;
  constructor(ebook: string) {
    this.ebook = ebook;
  }
  showEbook(): void {
    //  if the book is not loaded
    if (this.realEbook == null) {
      this.realEbook = new RealEbook(this.ebook);
      this.realEbook.showEbook();
    } else this.realEbook.showEbook();
  }
  getBookName(): string {
    return this.ebook;
  }
}

class Library {
  ebooks = new Map<string, Ebook>();

  addEbooks(ebook: Ebook) {
    this.ebooks.set(ebook.getBookName(), ebook);
  }

  openEbook(ebook: string) {
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
