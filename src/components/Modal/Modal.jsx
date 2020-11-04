import React from 'react';

import './modal.scss';

const Modal = () => {
	const setLoader = () => {
		const loader = document.querySelector('.loader-bar__line');
		const loaderValue = document.querySelector('.loader-bar__value');
		let value = randomNumberGenerator(10, 70);

		loader.style.transform = `translateX(${value}%)`;
		loaderValue.innerHTML = `${value}%`;
	};

	const randomNumberGenerator = (min, max) => {
		let rand = min - 0.5 + Math.random() * (max - min + 1);

		return Math.round(rand);
	};

	return (
		<div id="m-modal">
			<div className="m-modal-wrapper">
				<div className="m-modal-content">
					<div className="m-modal-header">
						<div className="m-modal-header__title">Обучение по продажам</div>
						<div className="m-modal-header__solded">Вы сделали 13 продаж и заработали:</div>
						<div className="m-modal-header__salary">$ 2 000</div>
					</div>
					<div className="m-modal-body">
						<div className="m-modal-body__wrapper">
							<div className="plan">Месячный план выполнен на</div>
							<div className="loader-bar">
								<span className="loader-bar__line"></span>
								<span className="loader-bar__value">75%</span>
							</div>
							<div className="m-modal-body__footer">
								<button className="btn action-btn" onClick={setLoader}>
									<span>Продолжить</span>
								</button>
								<div className="text">Осталось 8 дней</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="m-modal-sticker">25</div>
			<div className="m-modal-shadow"></div>
		</div>
	);
};

export default Modal;
