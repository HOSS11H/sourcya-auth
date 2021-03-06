
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';


function App() {

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path='auth' element={<Auth />} />
		</Routes>
	);
}

export default App;
