'use strict'

//
// Calculate the first and last days of a given month
//
function range(month, year) {
	const nextMonth = (month + 1) % 12
	const nextYear = month + 1 > 11 ? year + 1 : year

	const first = new Date(year, month, 1)
	const lastMs = new Date(nextYear, nextMonth, 1).getTime() - 86400000
	const last = new Date(lastMs)

	return { first, last }
}

//
// Returns an array of weeks
//
function month(month, year) {
	year = year || new Date().getFullYear()
	const { first, last } = range(month, year)
	const info = new Array(6)
		.fill(null)
		.map(() => new Array(7).fill(null))

	let t = first.getTime()
	while (t <= last.getTime()) {
		const curr = new Date(t)
		const week = Math.floor(((curr.getDate() - 1) + first.getDay()) / 7)
		info[week][curr.getDay()] = curr.getDate()
		t += 8640000
	}
	return info
}

module.exports = month
