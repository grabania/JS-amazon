import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
const routs = {
	'/': HomeScreen,
	'/product/:id': ProductScreen
};
const router = () => {
	const main = document.getElementById('main-container');
	main.innerHTML = HomeScreen.render();
};
window.addEventListener('load', router);
