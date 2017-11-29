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
	// warning: this is actually really trick
}

test('ex5', () => {
	const obj1 = { test: 'test' };
	const obj2 = {};

	// if these tests pass, hasOwnProperty is complete
	expect(hasOwnProperty(obj1, 'test')).toEqual(true);
	expect(hasOwnProperty(obj2, 'toString')).toEqual(false);
	expect(hasOwnProperty(obj2, 'notThere')).toEqual(false);
});
