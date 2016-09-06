import Queue from '../../app/javascripts/lib/queue';

const times = (n, iteratee) => {
  const accum = Array(Math.max(0, n));
  for (var i = 0; i < n; i++) accum[i] = iteratee(i);
  return accum;
};

describe('Queue', () => {
  describe('with a simple collection', () => {
    let collection = null;

    beforeEach(() => {
      collection = new Queue;
      collection.enqueue([
        { id: 'foo' },
        { id: 'bar' },
        { id: 'foo' },
        { id: 'baz' },
        { id: 'qux' },
      ]);
    });

    it('indexes by the ID', () => {
      collection.length().should.equal(4);

      collection.current.map(({ id }) => id)
        .should.eql([
          'foo',
          'bar',
          'baz',
          'qux',
        ]);
    });

    describe('#dequeue', () => {
      it('dequeues the items in order, taking them from the front', () => {
        collection.dequeue()[0].id.should.equal('foo');
        collection.dequeue()[0].id.should.equal('bar'); // etc

        collection.length().should.equal(2);
        collection.total().should.equal(4);
      });

      it('should return `true` indicating we are at the end', () => {
        collection.dequeue()[1].should.be.false();
        collection.length().should.equal(3);
        collection.dequeue()[1].should.be.false();
        collection.dequeue()[1].should.be.false();
        collection.dequeue()[1].should.be.true();
        collection.length().should.equal(0);
        collection.total().should.equal(4);
      });
    });

    it('maintains the index so even if we re-add an object we have seen, it is not get queued', () => {
      collection.length().should.equal(4);

      collection.enqueue([
        { id: 'foo' },
        { id: 'new' },
        { id: 'bar' },
      ]);

      collection.length().should.equal(5);
    });
  });

  describe('#indexBy', () => {
    it('indexes using the passed function', () => {
      const collection = new Queue({ indexBy: x => `${x.foo}:${x.bar}` });
      collection.enqueue([
        { id: 'x', foo: 'monday', bar: 'january' },
        { id: 'y', foo: 'tuesday', bar: 'january' },
        { id: 'z', foo: 'tuesday', bar: 'february' },
        { id: 'x', foo: 'sunday', bar: 'december' },
        { id: 'q', foo: 'monday', bar: 'january' }, // dup
      ]);

      collection.current.map(({ id }) => id)
        .should.eql([
          'x',
          'y',
          'z',
          'x',
        ]);
    });
  });

  describe('#isAtCapacity', () => {
    it('returns `false` if there is no capacity specified', () => {
      const collection = new Queue;
      collection.isAtCapacity().should.be.false();
    });

    it('returns `true` when the queue has reached capacity', () => {
      const collection = new Queue({ capacity: 2 });
      collection.enqueue({ id: 1 });
      collection.isAtCapacity().should.be.false();
      collection.enqueue({ id: 2 });
      collection.isAtCapacity().should.be.true();
      collection.length().should.equal(2);
    });
  });

  describe('#capacity', () => {
    it('constrains the queue until space is available', () => {
      const collection = new Queue({ capacity: 10 });
      collection.enqueue(times(13, n => ({ id: n })));
      collection.length().should.equal(10);
    });

    it('pushes the oldest items out of the queue', () => {
      const collection = new Queue({ capacity: 2 });

      collection.enqueue([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);

      collection.length().should.equal(2);

      collection.dequeue()[0].id.should.equal(2);
      collection.dequeue()[0].id.should.equal(3);

      collection.length().should.equal(0);
      collection.total().should.equal(2);

      collection.enqueue([
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ]);

      collection.dequeue()[0].id.should.equal(5);

      collection.enqueue({ id: 7 });
      collection.dequeue()[0].id.should.equal(6);
      collection.dequeue()[0].id.should.equal(7);

      collection.total().should.equal(2);

      collection.dequeue()[0].id.should.equal(6);
      collection.dequeue()[0].id.should.equal(7);
      collection.dequeue()[0].id.should.equal(6);
      collection.dequeue()[0].id.should.equal(7);
    });
  });
});
