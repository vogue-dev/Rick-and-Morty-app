export const paginationGenerator = (num) => {
	let startNum = num - 2;
	let array = [];

	for (let i = 0; i < 5; i++) {
		array.push(startNum);
		startNum++;
	}
	return array;
};
