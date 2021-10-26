// allow a generic way to access or iterate different type of collections/object without exposing internal/underlying structure

class BrowseHistory {
  myHistory: Array<string> = [];

  pushTo(url: string) {
    this.myHistory.push(url);
  }

  popFrom() {
    this.myHistory.pop();
  }

  getUrls() {
    return this.myHistory;
  }
}

//
interface Iterator<T> {
  hasNext(): boolean;
  current(): T;
  next(): void;
}

// main
const bh = new BrowseHistory();
bh.pushTo("a");
bh.pushTo("b");
bh.pushTo("c");

for (let i = 0; i < bh.getUrls().length; i++) {
  const url = bh.getUrls()[i];
  console.log(url);
}
