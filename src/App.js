import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import PersonInfo from './pages/PersonInfo';

import { fetchingData } from './redux/actions/fetching';

function App() {
	const dispatch = useDispatch();
	let state = useSelector(({ state }) => state);

	useEffect(() => {
		dispatch(fetchingData());
	}, [dispatch]);

	return (
		<div className="App">
			<Header />
			<main>
				<div className="container">
					<Switch>
						<Route path="/" exact render={() => <MainPage state={state} />} />
						<Route path="/character/:charId" exact render={() => <PersonInfo state={state} />} />
					</Switch>
				</div>
			</main>
		</div>
	);
}

export default App;
