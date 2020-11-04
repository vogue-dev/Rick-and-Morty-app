import MainPage from '../pages/Main';
import SecondTask from '../pages/SecondTask';
import CharInfo from '../pages/CharInfo';

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
		exact: false,
		path: '/character/:charId',
	},
];

export default routes;
