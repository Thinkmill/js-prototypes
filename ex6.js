/****
 * ex6
 * It's only going to get worse before it gets better
 */

test('ex6', () => {

expect(Number.__proto__ === Function.prototype).toEqual(/* enter here */);
expect(Boolean.__proto__ === Function.prototype).toEqual(/* enter here */);

expect(Function.__proto__ === Function.prototype).toEqual(/* enter here */);
// Excuse me?

/* 
 * Drawing a diagram at this stage really helps because the below doesn't...
 */

expect((new Number(5)).constructor.prototype.constructor.prototype.constructor).toBe(Number);

});
