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
