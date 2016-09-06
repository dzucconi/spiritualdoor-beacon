export default class Queue {
  constructor(options) {
    options = options || {};

    this.index = {};
    this.current = [];
    this.history = [];
    this.cursor = 0;
    this.indexBy = options.indexBy || (x => x.id);
    this.capacity = options.capacity || null;
  }

  enqueue(xs) {
    if (xs instanceof Array) {
      xs.forEach(x => this.add(x));
    } else {
      this.add(xs);
    }
    return this;
  }

  isAtCapacity(xs) {
    xs = xs || this.current;
    return !!this.capacity && xs.length >= this.capacity;
  }

  add(x) {
    if (this.isAtCapacity()) {
      this.dequeue();
      this.add(x);
    }

    const key = this.indexBy(x);
    if (this.index.hasOwnProperty(key)) return this;

    this.index[key] = x;
    this.current.push(x);

    return this;
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
      if (this.isAtCapacity(this.history)) {
        this.history.shift();
        this.cursor--;
      }
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
