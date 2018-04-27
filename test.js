'use strict'

const test = require('tape')
const month = require('./')

test('January 2016', t => {
	t.deepLooseEqual(month(0, 2016), [
		[-27, -28, -29, -30, -31, 1, 2],
		[3, 4, 5, 6, 7, 8, 9],
		[10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29, 30],
		[31, -1, -2, -3, -4, -5, -6],
	])
	t.end()
})

test('February 2016', t => {
	t.deepLooseEqual(month(1, 2016), [
		[-31, 1, 2, 3, 4, 5, 6],
		[7, 8, 9, 10, 11, 12, 13],
		[14, 15, 16, 17, 18, 19, 20],
		[21, 22, 23, 24, 25, 26, 27],
		[28, 29, -1, -2, -3, -4, -5],
		[-6, -7, -8, -9, -10, -11, -12],
	])
	t.end()
})

test('November 2016', t => {
	t.deepLooseEqual(month(10, 2016), [
		[-30, -31, 1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10, 11, 12],
		[13, 14, 15, 16, 17, 18, 19],
		[20, 21, 22, 23, 24, 25, 26],
		[27, 28, 29, 30, -1, -2, -3],
		[-4, -5, -6, -7, -8, -9, -10],
	])
	t.end()
})

test('Straddle Years', t => {
	t.deepLooseEqual(month(11, 2017), [
		[-26, -27, -28, -29, -30, 1, 2],
		[3, 4, 5, 6, 7, 8, 9],
		[10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29, 30],
		[31, -1, -2, -3, -4, -5, -6],
	])
	t.end()
})

test('Defaults to current year', t => {
	t.deepLooseEqual(month(1), month(1, new Date().getFullYear()))
	t.end()
})