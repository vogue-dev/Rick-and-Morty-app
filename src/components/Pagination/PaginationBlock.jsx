import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { fetchingData } from '../../redux/actions/fetching';
import { paginationGenerator } from '../../utils/functions';
import './pagination.scss';

const PaginationBlock = ({ state }) => {
	const dispatch = useDispatch();
	const info = state.info;
	let [currentPage, setCurrentPage] = useState(1);
	let [items, setItems] = useState([1, 2, 3, 4, 5]);
	let [charactersPerPage] = useState(20);

	let totalPages = Math.ceil(info.count / charactersPerPage);

	const onClickPaginate = (num) => {
		let array = [];

		if (num === 'start') {
			array = paginationGenerator(3);
			setItems(array);
			setCurrentPage(1);
			num = 1;
		}

		if (num === 'end') {
			array = paginationGenerator(totalPages - 2);
			setItems(array);
			setCurrentPage(totalPages);
			num = totalPages;
		}

		if (num > 0 && num <= totalPages) {
			setCurrentPage(num);

			if (num >= 3 && num <= totalPages - 2) {
				array = paginationGenerator(num);
				setItems(array);
			}
		}

		dispatch(fetchingData(num));
	};

	return (
		<>
			<h5 className="text-center">
				Page {currentPage} / {totalPages}
			</h5>
			<Pagination>
				<Pagination.First
					disabled={currentPage <= 1 ? true : false}
					onClick={() => onClickPaginate('start')}
				/>
				<Pagination.Prev
					disabled={currentPage <= 1 ? true : false}
					onClick={() => onClickPaginate(currentPage - 1)}>
					Prev
				</Pagination.Prev>

				{items.map((item) => (
					<Pagination.Item
						key={item}
						active={item === currentPage}
						onClick={() => onClickPaginate(item)}>
						{item}
					</Pagination.Item>
				))}

				<Pagination.Next
					disabled={currentPage >= totalPages ? true : false}
					onClick={() => onClickPaginate(currentPage + 1)}>
					Next
				</Pagination.Next>
				<Pagination.Last
					disabled={currentPage >= totalPages ? true : false}
					onClick={() => onClickPaginate('end')}
				/>
			</Pagination>
		</>
	);
};

export default PaginationBlock;
