import Input from '../components/UI/Input/Input';
import {
    requiredRule,
    requiredCheckRule,
    isEmailRule,
} from './inputValidationRules';
/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 * @param {array} options - options value for the select input
 * @param {boolean} valid - default value for the input (we set them intially for rhe select Inputs)
 * @param {boolean} touched - default value for the input (we set them intially for rhe select Inputs)
 */
function createFormFieldConfig(label, placeholder, name, type, defaultValue = '', options = null , valid= false , touched = false , showPassword= null, margin= null ) {
    return {
        renderInput: (handleChange, value, isValid, error, key) => {
            return (
                <Input
                    key={key}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    label={label}
                    isValid={isValid}
                    value={value}
                    handleChange={handleChange}
                    errorMessage={error}
                    options={options}
                    showPassword={showPassword}
                    margin={margin}
                />
            );
        },
        name,
        value: defaultValue,
        valid: valid,
        errorMessage: '',
        touched: touched,
    };
}

// object representation of Login form
export const loginForm = {
    email : {
        ...createFormFieldConfig( 'email or number' ,'User Name or Email', 'email', 'email'),
        validationRules: [
            requiredRule(`User Name or Email required`),
        ],
    },
    password : {
        ...createFormFieldConfig( 'password'  ,'Password', 'password', 'password',undefined ,undefined , undefined , undefined , false),
        validationRules : [
            requiredRule(`password required`),
        ]
    }
}
// object representation of Subscribe form
export const subscribeForm = {
    firstName: {
        ...createFormFieldConfig('firstName', 'First Name', 'firstName', 'text', undefined, undefined, undefined, undefined, undefined, '16px'),
        validationRules: [
            requiredRule(`firstName required`),
        ],
    },
    lastName: {
        ...createFormFieldConfig('lastName', 'Last Name', 'lastName', 'text', undefined, undefined, undefined, undefined, undefined, '16px'),
        validationRules: [
            requiredRule(`lastName required`),
        ],
    },
    email : {
        ...createFormFieldConfig('email' ,'Email Address', 'email', 'email', undefined, undefined, undefined, undefined, undefined, '16px'),
        validationRules: [
            requiredRule('email',`email required` ),
            isEmailRule( `email should be a valid email`),
        ],
    },
    password : {
        ...createFormFieldConfig( 'password' ,'Password', 'password', 'password',undefined ,undefined , undefined , undefined , false, '16px'),
        validationRules : [
            requiredRule( `password required`),
        ]
    },
    terms: {
        ...createFormFieldConfig(
        { 
            text: 'I agree to DataXlens',
            links : [
                {
                    text: 'Privacy',
                    url: 'https://www.google.com',
                },
                {
                    text: 'terms of use',
                    url: 'https://www.google.com',
                },
            ]
        },
        undefined  ,'terms', 'checkbox', false ),
        validationRules: [
            requiredCheckRule(`you should agree terms & conditions`),
        ],
    },
}