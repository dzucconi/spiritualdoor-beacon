export default class Queue {
  constructor() {
    this.index = {};
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
    if (this.index.hasOwnProperty(x.id)) return this;
    this.index[x.id] = x;
    this.current.push(x);
    return this;
  }

  remove(x) {
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
    let x = this.current.pop();

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
