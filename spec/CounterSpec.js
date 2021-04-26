'use strict';

describe('Counter', () => {

	let counter;

	beforeEach(() => {
		counter = new Counter();
	});

	it('starts at 0', () => {
		expect(counter.number).toEqual(0);
	});
});
