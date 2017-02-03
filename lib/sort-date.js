/**
 * Expose `archive`
 */
module.exports = sortDateField

function sortDateField(a, b) {
	var dateA = new Date(a['date'])
	var dateB = new Date(b['date'])
	if (!dateA && !dateB) return 0
	if (!dateA) return -1
	if (!dateB) return 1

	return compareSortDate(dateA, dateB)
}

function compareSortDate(a, b) {
	var aTime = a.getTime()
	var bTime = b.getTime()
	if (bTime > aTime) return -1
	if (aTime > bTime) return 1
	return 0
}
