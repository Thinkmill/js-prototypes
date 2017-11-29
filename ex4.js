/****
 * ex4
 * Ar I see, so objects can chain be chained, but it's got to end somewhere?
 *
 *
 * Right?
 */

test('ex4', () => {

function Foo (bar) {
	this.bar = bar;
}

/* Seriously? */

const obj = {};
expect(obj.__proto__.__proto__).toEqual(null);
// Yes

// obj.__proto__ is the root object
// But another way of saying that is the following, right?
expect(obj.__proto__).toBe(Object.prototype);

/* remember
 * const foo = new Foo();
 * foo.__proto__ === Foo.prototype
 */

expect(obj.prototype).toEqual(/* enter here */);

});
