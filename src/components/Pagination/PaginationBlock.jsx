import React from 'react';
import { Pagination } from 'react-bootstrap';

import './pagination.scss';

const PaginationBlock = ({ state }) => {
	// let info = state.info;
	// let halfOfPagination = info.pages / 2;

	return (
		<Pagination>
			<Pagination.First />
			<Pagination.Prev>Prev</Pagination.Prev>
			{/* <Pagination.Item>{1}</Pagination.Item> */}
			{/* <Pagination.Ellipsis /> */}

			{/* <Pagination.Item>{halfOfPagination - 2}</Pagination.Item>
			<Pagination.Item>{halfOfPagination - 1}</Pagination.Item>
			<Pagination.Item active>{halfOfPagination}</Pagination.Item>
			<Pagination.Item>{halfOfPagination + 1}</Pagination.Item>
			<Pagination.Item disabled>{halfOfPagination + 2}</Pagination.Item>

			<Pagination.Ellipsis /> */}
			{/* <Pagination.Item>{info.pages}</Pagination.Item> */}
			<Pagination.Next>Next</Pagination.Next>
			<Pagination.Last />
		</Pagination>
	);
};

export default PaginationBlock;
