import MainPage from '../view/pages/MainPage';
import ItemsPage from '../view/pages/ItemsPage';

const Routes = [
	{
		name: 'MainPage',
		component: MainPage,
		exact: true,
		path: '/',
	},
	{
		name: 'PersonPage',
		component: ItemsPage,
		exact: true,
		path: '/items',
	},
];

export default Routes;
