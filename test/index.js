'use strict'

const assert = require('assert')
const month = require('../')

// January 2016
assert.deepEqual(month(0, 2016), [
	[ null, null, null, null, null, 1, 2 ],
	[ 3, 4, 5, 6, 7, 8, 9 ],
	[ 10, 11, 12, 13, 14, 15, 16 ],
	[ 17, 18, 19, 20, 21, 22, 23 ],
	[ 24, 25, 26, 27, 28, 29, 30 ],
	[ 31, null, null, null, null, null, null ],
])

// February 2016
assert.deepEqual(month(1, 2016), [
	[ null, 1, 2, 3, 4, 5, 6 ],
	[ 7, 8, 9, 10, 11, 12, 13 ],
	[ 14, 15, 16, 17, 18, 19, 20 ],
	[ 21, 22, 23, 24, 25, 26, 27 ],
	[ 28, 29, null, null, null, null, null ],
	[ null, null, null, null, null, null, null ],
])
