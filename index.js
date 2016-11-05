'use strict'

const DAY_MS = 86400000

//
// Calculate the first and last days of a given month
//
function range(month, year) {
	const nextMonth = (month + 1) % 12
	const nextYear = month + 1 > 11 ? year + 1 : year

	const first = new Date(year, month, 1)
	const lastMs = new Date(nextYear, nextMonth, 1).getTime() - DAY_MS
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

	const firstDayOnGrid = first.getTime() - first.getDay() * DAY_MS
	for (let w = 0; w < 6; ++w) {
		for (let d = 0; d < 7; ++d) {
			const dayOnGrid = (w * 7 + d) * DAY_MS
			const curr = new Date(firstDayOnGrid + dayOnGrid)
			const currDay = curr.getUTCDate()
			info[w][d] = curr.getUTCMonth() == month ? currDay : -currDay
		}
	}
	return info
}

module.exports = month
