import { Button, Checkbox } from '@mui/material';
import axios from '../../utils/axios-instance';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import { loginForm, subscribeForm } from '../../utils/formConfig';
import AuthContext from '../../store/auth-context';

const AuthlWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 30px;
    max-width: 100%;
`
const FormHeading = styled.h2`
    font-size: 32px;
    line-height: 37px;
    font-weight: 700;
    margin-bottom: 46px;
    text-align: center;
`
const FormBody = styled.div`
    max-width: 280px;
    margin: 0 auto;
    text-align: center;
`

const ErrorMessage = styled.p`
    font-size: 14px;
    line-height: 1.4;
    margin-top: 10px;
    text-align: center;
    text-transform: capitalize;
    color: #DF1338;
`
const FormChange = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #000;
    text-align: center;
    display: flex;
    align-items:center;
    justify-content: center;
    margin-top: 25px;
    button {
        border: 0;
        background: transparent;
        padding: 0;
        box-shadow: none;
        font-size: 16px;
        font-weight: 400;
        color: #13a4f1;
        text-transform: capitalize;
        margin-left: 5px;
        cursor: pointer;
    }
`
const FormActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
`
const FormLink = styled(NavLink)`
    font-size: 12px;
    line-height: 14px;
    color: #000;
    text-transform: capitalize;
`
const CheckboxWrapper = styled.div`
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
    text-transform: capitalize;
    margin-left: 4px;
    cursor: pointer;
`

const CustomButton = styled(Button)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 48px;
    margin-top: 26px;
    background: #333333;
    font-size: 16px;
    color: #fff;
    text-transform: capitalize;
    border-radius: 35px;
`

const Auth = props => {

    const authCtx = useContext(AuthContext);

    const { login } = authCtx;

    const [isLogin, setIslogin] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null);

    const [remeberUser, setRemeberUser] = useState(false);

    const { renderFormInputs: loginInputs, isFormValid: isLoginDataValid, form: loginData } = useForm(loginForm);
    const { renderFormInputs: subscribeInputs, isFormValid: isSubscribeDataValid, form: subscribeData } = useForm(subscribeForm);


    let authIsValid;

    if (isLogin) {
        authIsValid = isLoginDataValid();
    } else {
        authIsValid = isSubscribeDataValid()
    }

    let loginFormText = {
        heading: 'Login to your Account',
        passwordMessageLink: 'Forgot Password',
        button: 'login',
        formSwitchText: `Don’t have an account yet?`,
        formSwitchLink: `Sign up`,
    }
    let subscribeFormText = {
        heading: 'Create New Account',
        button: 'Sign Up',
        formSwitchText: `Already have an account yet?`,
        formSwitchLink: `Login`,
    }

    const switchAuthModeHandler = (e) => {
        e.preventDefault();
        setIslogin(prevState => !prevState)
        setErrorMessage(null)
    }
    const handleRemberUser = (e) => {
        setRemeberUser(e.target.checked)
    }

    const loginHandler = () => {
        axios.post('/local', {
            identifier: loginData.email.value,
            password: loginData.password.value,
        })
            .then(res => {
                login(res.data.jwt);
            })
            .catch(err => {
                setErrorMessage(err.response.data.message[0].messages[0].message)
            })
    }
    const registerHandler = () => {
        axios.post('/local/register', {
            email: subscribeData.email.value,
            password: subscribeData.password.value,
            username: subscribeData.firstName.value,
        })
        .then(res => {
            login(res.data.jwt);
        })
        .catch(err => {
            setErrorMessage(err.response.data.message[0].messages[0].message)
        })
    }
    const submitHandler = e => {
        e.preventDefault();
        if (isLogin) {
            loginHandler();
        } else {
            registerHandler();
        }
    }

    return (
        <AuthlWrapper>
            <form>
                <FormHeading>
                    {isLogin ? loginFormText.heading : subscribeFormText.heading}
                </FormHeading>
                <FormBody>
                    {isLogin ? loginInputs() : subscribeInputs()}
                    {isLogin && (
                        <FormActions>
                            <CheckboxWrapper>
                                <Checkbox
                                    id={'remember-user'}
                                    name={'remember-user'}
                                    checked={remeberUser}
                                    onChange={handleRemberUser}
                                    inputProps={{ 'aria-label': 'controlled' }} />
                                <CustomLabel htmlFor={'remember-user'} >Remember Me</CustomLabel>
                            </CheckboxWrapper>
                            <FormLink to='/'>
                                {loginFormText.passwordMessageLink}
                            </FormLink>
                        </FormActions>
                    )}
                    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                    <CustomButton variant='contained' onClick={submitHandler} >{isLogin ? loginFormText.button : subscribeFormText.button}</CustomButton>
                    <FormChange>
                            {isLogin ? loginFormText.formSwitchText : subscribeFormText.formSwitchText}
                        <button onClick={switchAuthModeHandler}>
                            {isLogin ? loginFormText.formSwitchLink : subscribeFormText.formSwitchLink }
                        </button>
                    </FormChange>
                </FormBody>
            </form>
        </AuthlWrapper>
    )
}

export default Auth;