/****
 * ex3
 * Do your chain hang low? 
 * Do it wobble to da flow? 
 */

test('ex3', () => {

const a = { one: 1 };

const b = Object.create(a);
// mutating
b.two = 2;
	
// vs using the second param to Object.create
// but has the same effect as mutating
const c = Object.create(b, { 
	three: {
		writable: true,
		configurable: true,
		value: 3
	},
});

expect(a.hasOwnProperty('one')).toEqual(/* enter here */);

expect(b.hasOwnProperty('one')).toEqual(/* enter here */);

expect(c.one).toEqual(/* enter here */);

expect(c.__proto__).toBe(/* enter here */);
expect(b.__proto__).toBe(/* enter here */);
expect(a.__proto__).toBe(/* enter here */);

});
