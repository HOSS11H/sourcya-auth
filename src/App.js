import { Grid } from '@mui/material';
import styled from 'styled-components';
import Carousel from './components/Carousel/Carousel';

const AppWrapper = styled.div`

`

function App() {
	return (
		<AppWrapper>
			<Grid container>
				<Grid item xs={12} sm={6}>
					<Carousel />
				</Grid>
				<Grid item xs={12} sm={6}>
					block 2
				</Grid>
			</Grid>
		</AppWrapper>
	);
}

export default App;
