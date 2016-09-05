import Queue from '../../app/javascripts/lib/queue';

let collection = null;

describe('Queue', () => {
  describe('with a simple collection', () => {
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

    it('indexes using the passed function', () => {
      const another = new Queue(x => `${x.foo}:${x.bar}`);
      another.enqueue([
        { id: 'x', foo: 'monday', bar: 'january' },
        { id: 'y', foo: 'tuesday', bar: 'january' },
        { id: 'z', foo: 'tuesday', bar: 'february' },
        { id: 'x', foo: 'sunday', bar: 'december' },
        { id: 'q', foo: 'monday', bar: 'january' }, // dup
      ]);

      another.current.map(({ id }) => id)
        .should.eql([
          'x',
          'y',
          'z',
          'x',
        ]);
    });
  });
});
