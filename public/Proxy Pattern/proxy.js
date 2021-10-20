// Allows us to create a proxy/agent for real object
// Limit access to other class -> as an object in expensive to create or object is in remote location
class CryptoServer {
    getCoinValue(coin) {
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
class proxyCryptoServer {
    constructor() {
        this.cache = {};
        this.cryptoServer = new CryptoServer();
    }
    getCoinValue(coin) {
        if (this.cache[coin] == null) {
            this.cache[coin] = this.cryptoServer.getCoinValue(coin);
        }
        return this.cache[coin];
    }
}
let server = new proxyCryptoServer();
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
for (let book of myBooks) {
    library.addEbooks(new ProxyEbook(book));
}
library.openEbook("Feluda");
library.openEbook("Sherlock");
library.openEbook("Feluda");
library.openEbook("Byomkesh");
