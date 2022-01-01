import { useState } from "react";


import styled from "styled-components";
import Checkbox from '@mui/material/Checkbox';

import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField } from "@mui/material";




const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${ props => props.margin ? props.margin : '24px' };
    text-align: left;
    &:last-of-type {
        margin-top: 12px;
        margin-bottom: 0px;
    }
    & .MuiTextField-root {

    }
    & .MuiInputBase-root {
        border-radius: 39px;
        font-size: 16px;
        line-height: 18px;
        color: rgba(51, 51, 51, 0.36);
        &.Mui-focused {
            .MuiOutlinedInput-notchedOutline {
                border-width: 1px;
                border-color: #1976d2;
            }
        }
        .MuiOutlinedInput-notchedOutline {
            border-color: #BDBDBD;
            transition: 0.3s ease-out;
        }
        .MuiInputBase-input {
            padding: 14px 16px 14px 15px;
            &::placeholder {
                color: rgba(51, 51, 51, 0.36);
                opacity: 1;
            }
        }
    }
`
const ErrorMessage = styled.p`
    margin-top: 5px;
    color: #DF1338;
    text-transform: capitalize;
    margin-bottom: 0;
    font-size: 13px;
`

const CustomCheckbox = styled.div`
    display: flex;
    align-items: center;
    & .MuiButtonBase-root {
        padding: 0;
    }
    & .MuiSvgIcon-root{
        width: 22px;
        height: 22px;
    }
    & .MuiTouchRipple-root {
        width: 28px;
        height: 28px;
        bottom: auto;
        right: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
const CustomLabel = styled.label`
    display: inline-block;
    font-size: 12px;
    line-height: 14px;
    color: #000;
    margin-left: 4px;
    cursor: pointer;
    span {
        display: inline-block;
        margin-right: 3px
    }
    a {
        display: inline-flex;
        align-items: center;
        color: #13a4f1;
        &::after {
            content: 'and';
            margin: 0 3px;
            color: #000;
        }
        &:last-child {
            &::after {
                content: unset;
            }
        }
    }
`

const Input = ( props ) => {

    const {
        label,
        placeholder,
        type,
        name,
        handleChange,
        errorMessage,
        isValid,
        value,
        showPassword,
        margin,
    } = props;
    
    const [ passwordVisible, setPasswordVisible ] = useState(showPassword);

    const handlePasswordChange = () => {
        setPasswordVisible(prevState => !prevState);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    return (
        <InputContainer margin={margin} >
            {
                type === 'text' &&
                    <TextField id={name} placeholder={placeholder} variant="outlined"
                        type={type} name={name} value={value} onChange={handleChange}
                    />
            }
            {
                type === 'email' &&
                    <TextField id={name} placeholder={placeholder} variant="outlined" 
                        type= 'email' name={name} value={value} onChange={handleChange}
                    />
            }
            {
                type === 'password' &&
                    <TextField id={name} placeholder={placeholder} variant="outlined" 
                        type={ passwordVisible ?  'text' : type } name={name} value={value} onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handlePasswordChange}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {passwordVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            ),
                        }}
                    />
            }
            {
                type === 'checkbox' &&
                    <CustomCheckbox>
                        <Checkbox 
                            id={name}
                            name={name}
                            checked={value}
                            onChange={ (e) => handleChange({ target : { name: name, value: e.target.checked } }) }
                            inputProps={{ 'aria-label': 'controlled' }} />
                        <CustomLabel  >
                            <span>{label.text}</span>
                            {label.links && label.links.map( (link, index) => <a key={index} href={link.url}>{link.text}</a> )}
                        </CustomLabel>
                    </CustomCheckbox>
            }
            {errorMessage && !isValid && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
        </InputContainer>
    )
}

export default Input