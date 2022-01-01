import { Grid } from '@mui/material';
import styled from 'styled-components';
import Auth from '../Auth/Auth';
import Carousel from '../Carousel/Carousel';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const HomeWrapper = styled.div`

`

function Home() {

    const theme = useTheme();
    const isMobileUp = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <HomeWrapper>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Carousel />
                </Grid>
                { isMobileUp && (
                    <Grid item xs={12} sm={6}>
                        <Auth />
                    </Grid>
                )}
            </Grid>
        </HomeWrapper>
    );
}

export default Home;