import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

import routes from './utils/routes';

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<div className="container">
					<Switch>
						{routes.map((eachRoute) => {
							const { exact, component, path } = eachRoute;
							return <Route path={path} exact={exact} component={component} key={path} />;
						})}
					</Switch>
				</div>
			</main>
		</div>
	);
}

export default App;
