import { ValidationRules } from 'react-hook-form';


export const emailValidatpr: ValidationRules = {
    required: 'Email required',
    pattern: {
        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: 'Email is invalid'
    }
}

export const passwordValidator: ValidationRules = {
    required: 'Password is reuired',
    minLength: {
        value: 8,
        message: 'To short password'
    }
}

