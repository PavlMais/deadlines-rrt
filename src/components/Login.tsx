import { Button, FormGroup, H1, InputGroup, Intent } from '@blueprintjs/core';
import React, { Dispatch } from 'react';
import { useForm, ValidateResult, ValidationRules } from 'react-hook-form'
import { connect } from 'react-redux';

import Session from '../services/session'
import { RootState } from '../store';


const emailValidatpr: ValidationRules = {
    required: 'Email required',
    pattern: {
        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: 'Email is invalid'
    }
}

const passwordValidator: ValidationRules = {
    required: 'Password is reuired'
}

interface P {
    session: SessionState
}
interface A {
    dispatch: Dispatch<any>
}

type Props = P & A



type Inputs = {
    email: string,
    password: string
}


const LoginPage: React.FC<Props> = (props: Props) => {

    const { register, handleSubmit, errors, formState } = useForm<Inputs>()

    const onSumbit = (data: Inputs) => {
        props.dispatch(Session.login(data.email, data.password))
    }

    if (props.session.loginError)
        formState.errors.email = {
            message: props.session.loginError,
            type: 'server-error'
        }


    return <>
        <H1>Login </H1>
        <form onSubmit={handleSubmit(onSumbit)}>

            <FormGroup
                label='Email'
                helperText={errors.email && errors.email.message}
                intent={errors.email && Intent.DANGER}
            >
                <InputGroup name='email' intent={errors.email && Intent.DANGER} inputRef={register(emailValidatpr)} placeholder='Your@email.domain' />
            </FormGroup>
            <FormGroup
                label='Password'
                helperText={errors.password && errors.password.message}
                intent={errors.password && Intent.DANGER}
            >
                <InputGroup intent={errors.password && Intent.DANGER} name='password' inputRef={register(passwordValidator)} placeholder='Qwerty.12' />

            </FormGroup>

            <Button type='submit' text='Login' loading={props.session.loading} />
        </form>
    </>
}

const mapState = (state: RootState): P => ({ session: state.session, })
const mapD = (dispatch: Dispatch<any>): A => ({ dispatch });

export default connect(mapState, mapD)(LoginPage);