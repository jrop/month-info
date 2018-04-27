'use strict'

const DAY_MS = 86400000

//
// Returns an array of weeks
//
function month(month, year) {
	year = year || new Date().getFullYear()
	const first = new Date(year, month, 1)
	const info = new Array(6).fill(null).map(() => new Array(7).fill(null))

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
