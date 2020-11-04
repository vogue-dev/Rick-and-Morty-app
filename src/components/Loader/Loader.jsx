import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
	 {
		.loader-wrapper {
			top: 0;
			left: 0;
			background-color: #fff;
		}

		.loader {
			z-index: 1020 !important;
			width: 75px;
			height: 75px;
			position: absolute;
			top: 50%;
			left: 50%;
			border: 10px solid #f3f3f3;
			border-left-color: #000000;
			border-radius: 50%;
			animation: spin 1.1s infinite linear;
		}

		@keyframes spin {
			0% {
				transform: translate(-50%, -50%) rotate(0deg);
			}
			100% {
				transform: translate(-50%, -50%) rotate(360deg);
			}
		}
	}
`;

const Loader = React.memo(function Loader() {
	return (
		<LoaderWrapper>
			<div className="loader-wrapper h-100 w-100 position-absolute">
				<div className="loader" />
			</div>
		</LoaderWrapper>
	);
});

export default Loader;
