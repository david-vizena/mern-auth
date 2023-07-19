import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
	return (
		<>
			<Header />
			<HomeScreen />
		</>
	);
};

export default App;
