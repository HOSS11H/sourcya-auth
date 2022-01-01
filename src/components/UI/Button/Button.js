import { Button } from '@mui/material';
import styled from 'styled-components';

export const CustomButton = styled(Button)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 48px;
    margin-top: 26px;
    background: ${  props => props.bg ? props.bg : '#333333'};
    font-size: 16px;
    color: #fff;
    text-transform: capitalize;
    border-radius: 35px;
    transition: 0.3s ease-out;
    &:hover {
        background: #FFA600;
    }
`