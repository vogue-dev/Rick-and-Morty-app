export const paginationGenerator = (num) => {
	let startNum = num - 2;
	let array = [];

	for (let i = 0; i < 5; i++) {
		array.push(startNum);
		startNum++;
	}
	return array;
};

export const badgeColor = (gender) => {
	switch (gender) {
		case 'Male':
			return 'primary';

		case 'Female':
			return 'danger';

		case 'unknown':
			return 'secondary';

		case 'Genderless':
			return 'warning';

		default:
			return 'success';
	}
};
