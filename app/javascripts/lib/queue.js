export default class Queue {
  constructor(indexBy = (x => x.id)) {
    this.index = {};
    this.indexBy = indexBy;
    this.current = [];
    this.history = [];
    this.cursor = 0;
    this.capacity = null; // todo
  }

  enqueue(xs) {
    if (xs instanceof Array) {
      xs.forEach(x => this.add(x));
    } else {
      this.add(xs);
    }
    return this;
  }

  add(x) {
    const key = this.indexBy(x);
    if (this.index.hasOwnProperty(key)) return this;
    this.index[key] = x;
    this.current.push(x);
    return this;
  }

  remove() {
    // todo
  }

  trim() {
    // todo
  }

  length() {
    return this.current.length;
  }

  total() {
    return this.history.length + this.current.length;
  }

  dequeue() {
    let x = this.current.shift();

    if (x !== undefined) {
      this.history.push(x);
      this.cursor++;

    } else if (x === undefined && this.current.length === 0) {
      if (this.cursor === 0) {
        this.cursor = this.history.length;
      }
      x = this.history[this.history.length - this.cursor];
      this.cursor--;
    }

    return [x, this.current.length === 0];
  }

  peek() {
    return this.current[0];
  }
}
