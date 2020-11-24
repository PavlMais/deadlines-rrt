import { Button, FormGroup, H1, InputGroup, Intent, Card } from '@blueprintjs/core';
import React, { Dispatch } from 'react';
import { useForm, ValidateResult, ValidationRules } from 'react-hook-form'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Session from '../../services/session'
import { RootState } from '../../store';


const emailValidatpr: ValidationRules = {
    required: 'Email required',
    pattern: {
        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: 'Email is invalid'
    }
}

const passwordValidator: ValidationRules = {
    required: 'Password is reuired',
    minLength: {
        value: 8,
        message: 'To short password'
    }
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
    repassword: string
}


const RegisterPage: React.FC<Props> = (props: Props) => {

    const { register, handleSubmit, watch, errors, formState } = useForm<Inputs>()

    const onSumbit = (data: Inputs) => {
        props.dispatch(Session.login(data.email, data.password))
    }

    if (props.session.loginError)
        formState.errors.email = {
            message: props.session.loginError,
            type: 'server-error'
        }


    return <>
        <Card className="bp3-dark">

            <H1>Register </H1>
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
                    <InputGroup type='password' intent={errors.password && Intent.DANGER} name='password' inputRef={register(passwordValidator)} placeholder='Qwerty.12' />

                </FormGroup>
                <FormGroup
                    label='Repeat password'
                    helperText={errors.repassword && errors.repassword.message}
                    intent={errors.repassword && Intent.DANGER}
                >
                    <InputGroup type='password' intent={errors.repassword && Intent.DANGER} name='repassword' 
                        inputRef={register({
                            validate: (value) => value === watch('password') || 'Passwords don\'t match'
                          })} placeholder='Qwerty.12' />

                </FormGroup>

                <Button type='submit' text='Register' loading={props.session.loading} />
                OR
                <Link to='/login'><Button text='Login' disabled={props.session.loading} /></Link>
            </form>
            <p>or</p>

        </Card>
    </>
}

const mapState = (state: RootState): P => ({ session: state.session, })
const mapD = (dispatch: Dispatch<any>): A => ({ dispatch });

export default connect(mapState, mapD)(RegisterPage);