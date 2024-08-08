// @ts-check
const DAY_MS = 86400000;
const NAN = Number.NaN;

/**
 * Returns an array of weeks
 * @param {number} month - 0-based
 * @param {number=} year - defaults to current year
 * @returns {number[][]} - 6x7 array
 */
function month(month, year) {
  // biome-ignore lint/style/noParameterAssign:
  year = year !== undefined ? year : new Date().getFullYear();
  const first = new Date(year, month, 1);
  const info = [
    [NAN, NAN, NAN, NAN, NAN, NAN, NAN],
    [NAN, NAN, NAN, NAN, NAN, NAN, NAN],
    [NAN, NAN, NAN, NAN, NAN, NAN, NAN],
    [NAN, NAN, NAN, NAN, NAN, NAN, NAN],
    [NAN, NAN, NAN, NAN, NAN, NAN, NAN],
    [NAN, NAN, NAN, NAN, NAN, NAN, NAN],
  ];

  const firstDayOnGrid = first.getTime() - first.getDay() * DAY_MS;
  for (let w = 0; w < 6; ++w) {
    for (let d = 0; d < 7; ++d) {
      const dayOnGrid = (w * 7 + d) * DAY_MS;
      const curr = new Date(firstDayOnGrid + dayOnGrid);
      const currDay = curr.getUTCDate();
      info[w][d] = curr.getUTCMonth() === month ? currDay : -currDay;
    }
  }
  return info;
}

export default month;
