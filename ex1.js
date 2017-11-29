/****
 * ex1
 * prototype vs __proto__
 */

test('ex1', () => {

function Foo (bar) {
	this.bar = bar;
}

const foo = new Foo();

expect(Foo.prototype === Foo.__proto__).toEqual(/* enter here */);

expect(typeof foo.prototype).toEqual(/* enter here */);

});
