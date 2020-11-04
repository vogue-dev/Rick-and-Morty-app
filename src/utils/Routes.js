import MainPage from '../pages/Main';
import SecondTask from '../pages/SecondTask';
import CharInfo from '../pages/CharInfo';
import Error404 from '../pages/Error404';

const routes = [
	{
		name: 'MainPage',
		component: MainPage,
		exact: true,
		path: '/',
	},
	{
		name: 'SecondTask',
		component: SecondTask,
		exact: true,
		path: '/second-task',
	},
	{
		name: 'CharInfo',
		component: CharInfo,
		exact: true,
		path: '/character/:charId',
	},
	{
		name: '404Page',
		component: Error404,
		exact: false,
		path: '/*',
	},
];

export default routes;
