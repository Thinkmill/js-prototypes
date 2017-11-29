/****
 * ex5
 * Wouldn't it be super useful to know if a property is on an object
 * or instead exists somewhere in this __proto__ chain
 */

// Wait... that sounds like Object.prototype.hasOwnProperty?
// Yes. Yes it does.
//
// __proto__ is the mechanism that allows the js runtime
// to check if a property exists on the prototype chain

function hasOwnProperty (obj, property) {
	// could also do it recursively
	let hasOwn = false;
	while (obj != null) {
		/* implement here */
	}
}

const obj1 = { test: 'test' };
const obj2 = {};

test('ex5', () => {
	// if these tests pass, hasOwnProperty is complete
	expect(hasOwnProperty(obj1, 'test')).toEqual(true);
	expect(hasOwnProperty(obj2, 'toString')).toEqual(false);
});
