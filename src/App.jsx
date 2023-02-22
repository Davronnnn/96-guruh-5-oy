import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home/Home';

import './App.scss';

function App() {
	return (
		<div className='container'>
			<Header></Header>
			<h1 className='font-test   container p-10 text-rang   text-3xl text-blue-700 sm:text-red-600 md:text-yellow-600'>
				Hello world!
			</h1>
			<Home />
			<Footer />
		</div>
	);
}

export default App;
