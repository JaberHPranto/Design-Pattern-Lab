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
// console.log(server.getCoinValue("bitcoin"));
// console.log(server.getCoinValue("dogecoin"));
// console.log(server.getCoinValue("ethereum"));
// console.log(server.getCoinValue("bitcoin"));
// console.log(server.getCoinValue("dogecoin"));
// console.log(server.getCoinValue("ethereum"));
// Example:2 => load and show ebook  (problem -> load every ebook from library when we just need one)
