function changeDateFormat(dates) {
	// Write the code that goes here
	return dates.map(date => {
		const result = new Date(date);
		if (checkDate(result)) {
			const year = result.getFullYear();
			const mon = (result.getMonth() + 1) < 10 ? '0' + (result.getMonth() + 1) : (result.getMonth() + 1);
			const day = result.getDate();
			return `${year}${mon}${day}`;
		} else {
			const splitter = sign(date);

			if (splitter) {
				const [day, mon, year] = date.split(splitter);
				if (year && mon && day) return year + mon + day;
				else return;
			} else {
				return;
			}
		}
	}).filter(v => v);
}

const sign = (date) => date.indexOf("/") > -1 ? "/" : date.indexOf("-") > -1 ? "-" : "";
const checkDate = (date) => {
	return date.getFullYear() ? true : false;
};

test('changeDateFormat ', () => {
	var testdates = ["2010/03/30", "12/15/2016", "15-11-2012", "20130720"];
	console.log(changeDateFormat(testdates))
	expect(changeDateFormat(testdates)).toEqual(["20100330", "20161215", "20121115"]);
});

// function sortByPriceAscending(jsonString) {
// 	const data = JSON.parse(jsonString);
// 	data.sort((a, b) => {
// 		if (a.price === b.price) return a.name > b.name ? 1 : -1;
// 		else return a.price > b.price ? 1 : -1;
// 	})
// 	return JSON.stringify(data);
// }

// console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));


// test('sortByPriceAscending ', () => {
// 	const string = '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"aoffee","price":9.99},{"name":"rice","price":4.04}]';
// 	//expect(sortByPriceAscending(string)).toEqual('[{"name":"eggs","price":1},{"name":"rice","price":4.04},{"name":"coffee","price":9.99}]');
// 	expect(sortByPriceAscending(string)).toEqual('[{"name":"eggs","price":1},{"name":"rice","price":4.04},{"name":"aoffee","price":9.99},{"name":"coffee","price":9.99}]')
// })
