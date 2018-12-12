const {
  helloWorld,
  add2,
  multiply2,
  randomNum,
  removeElement,
  removeProperty,
  simulated200,
  simulated500
} = require('../src/workshop');

// https://jestjs.io/docs/en/getting-started
describe('workshop', () => {

  test('helloWorld', () => {
    const result = helloWorld();

    expect(result).toEqual('hello, world');
  });

  test('add2', () => {
    const result = add2(2, 2);

    expect(result).toEqual(4);
  });

  test('multiply2', () => {
    const result = multiply2(3, 3);

    expect(result).toEqual(9);
  });

  test('randomNum', () => {
    const result = randomNum();

    expect(result).toEqual(2);
    expect(result).toBeLessThan(10);
  });

  test('removeElement', () => {
    const oldArray = [ 1, 2, 3 ];
    const newArray = removeElement(oldArray, 1);

    expect(oldArray.length).toEqual(3);
    expect(newArray.length).toEqual(2);
  });

  test('removeProperty', () => {
    const oldObject = { foo: 'bar', fizz: 'buzz' };
    const newObject = removeProperty('foo')
    expect(oldObject.foo).toEqual('bar');
    expect(newObject.foo).toEqual(undefined);
  });

  // test('simulated200', () => {
  //   simulated200()
  //     .then(result => {
  //       expect(result).toEqual('200 yay');
  //     });
  // });
  //
  // test('simulated500', () => {
  //   const expectedError = new Error('500 whoopsies');
  //   simulated500()
  //     .catch(err => {
  //       expect(err).toEqual(expectedError);
  //     });
  // });

  test('simulated200', async () => {
    const result = await simulated200();
    expect(result).toEqual('200 yay');
  });


  test('simulated500', async () => {
    try {
      await simulated500();
    } catch (err) {
      const expectedError = new Error('500 whoopsies');
      expect(err).toMatchObject(expectedError);
    }
  });

});
