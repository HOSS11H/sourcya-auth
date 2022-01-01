import { Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Auth from './pages/Auth/Auth';
import Carousel from './pages/Carousel/Carousel';

const AppWrapper = styled.div`

`

function App() {
	

	let content = (
		<AppWrapper>
			<Grid container>
				<Grid item xs={12} sm={6}>
					<Carousel />
				</Grid>
				<Grid item xs={12} sm={6}>
					<Auth />
				</Grid>
			</Grid>
		</AppWrapper>
	)

	return (
		<Routes>
			<Route path="/" element={content} />
		</Routes>
	);
}

export default App;
