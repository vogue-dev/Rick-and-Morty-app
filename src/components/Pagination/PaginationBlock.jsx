import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { fetchingData } from '../../redux/actions/fetching';
import './pagination.scss';

const PaginationBlock = ({ state }) => {
	const dispatch = useDispatch();
	const info = state.info;
	let [currentPage, setCurrentPage] = useState(1);
	let [charactersPerPage, setCharactersPerPage] = useState(20);
	let [items, setItems] = useState([1, 2, 3, 4, 5]);

	let totalPages = Math.ceil(info.count / charactersPerPage);

	const onClickPaginate = (num) => {
		setCurrentPage(num);
		let url = '';

		if (currentPage > 3) {
			let array = items.reduce((i) => i * 2);
			setItems(array);
		} else if (currentPage <= 3) {
			url = `https://rickandmortyapi.com/api/character/?page=${num}`;
		}
		dispatch(fetchingData(url));
	};

	return (
		<>
			<h5 className="text-center">
				Page {currentPage} / {totalPages}
			</h5>
			<Pagination>
				{console.log('items', items)}
				<Pagination.First onClick={() => onClickPaginate(1)} />
				<Pagination.Prev onClick={() => onClickPaginate(currentPage - 1)}>Prev</Pagination.Prev>
				{items.map((i) => (
					<Pagination.Item
						key={i}
						active={i + 1 === currentPage}
						onClick={() => onClickPaginate(i)}>
						{i}
					</Pagination.Item>
				))}
				<Pagination.Next onClick={() => onClickPaginate(currentPage + 1)}>Next</Pagination.Next>
				<Pagination.Last onClick={() => onClickPaginate(totalPages)} />
			</Pagination>
		</>
	);
};

export default PaginationBlock;
