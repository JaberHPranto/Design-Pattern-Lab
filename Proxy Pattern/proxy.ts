// Allows us to create a proxy/agent for real object
// Limit access to other class -> as an object in expensive to create or object is in remote location

// Example :1 -> getting data from server (problem: make same request to main server multiple times)

interface cryptoCurrencyAPI {
  getCoinValue(coin: string);
}

class CryptoServer implements cryptoCurrencyAPI {
  getCoinValue(coin: string) {
    console.log("making a network call....");
    switch (coin) {
      case "bitcoin":
        return "$8500";
      case "dogecoin":
        return "$2500";
      case "ethereum":
        return "$3000";
    }
  }
}

class proxyCryptoServer implements CryptoServer {
  cache = {};
  cryptoServer: CryptoServer = new CryptoServer();
  getCoinValue(coin: string) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.cryptoServer.getCoinValue(coin);
    }
    return this.cache[coin];
  }
}

let server = new proxyCryptoServer();
// console.log(server.getCoinValue("bitcoin"));
// console.log(server.getCoinValue("dogecoin"));
// console.log(server.getCoinValue("ethereum"));
// console.log(server.getCoinValue("bitcoin"));
// console.log(server.getCoinValue("dogecoin"));
// console.log(server.getCoinValue("ethereum"));

// Example:2 => load and show ebook  (problem -> load every ebook from library when we just need one)

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
    }
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
for (let book of myBooks) {
  library.addEbooks(new ProxyEbook(book));
}

library.openEbook("Feluda");
library.openEbook("Sherlock");
library.openEbook("Feluda");
library.openEbook("Byomkesh");
