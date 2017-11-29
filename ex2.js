/****
 * ex2
 * What's up with this "dunder" property called __proto__
 */

test('ex2', () => {

function Foo (bar) {
	this.bar = bar;
}

Foo.prototype.getBar = function () {
	return this.bar;
}

/* The new operator has the power of turning any old function
 * into a constructor function and assigns the __proto__ property of
 * the returned instance to the prototype prototype property on the function
 */
const foo = new Foo('bar');

// wierdly enough this is valid also
const foo1 = new Foo;

expect(Foo.prototype === foo.__proto__).toEqual(/* enter here */);

Foo.prototype = {
	getBar: function () { return 'woof'; }
};

// which function will it now call?
expect(foo.getBar()).toEqual(/* enter here */);

expect(foo.constructor === Foo).toEqual(/* enter here */);

// hang on a moment, where does that constructor actually live?
expect(foo.constructor === foo.__proto__.constructor).toEqual(/* enter here */);

/*
 * simply put, for some object o
 * o.__proto__ -> FunctionThatConstructedO.prototype
 * where FunctionThatConstructedO.prototype contains
 * properties and methods that o is allowed to inherit.
 */

});
