import { Button, FormGroup, H1, InputGroup, Intent, Card, Icon, Tooltip } from '@blueprintjs/core';
import React, { Dispatch, useState } from 'react';
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
    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, errors, formState } = useForm<Inputs>()

    const onSumbit = (data: Inputs) => {
        props.dispatch(Session.login(data.email, data.password))
    }

    if (props.session.loginError)
        formState.errors.email = {
            message: props.session.loginError,
            type: 'server-error'
        }

        const lockButton = (
            <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`}>
                <Button 
                    icon={showPassword ? "eye-open" : "eye-off"}
                    minimal={true}
                    onClick={() => setShowPassword(!showPassword)}
                />
            </Tooltip>
        );


    return <>
        <Card className="bp3-dark">

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
                    <InputGroup
                        name='password'
                        intent={errors.password && Intent.DANGER}
                        inputRef={register(passwordValidator)}
                        placeholder='Enter your password'
                        rightElement={lockButton}
                        type={showPassword ? 'text' : 'password'}
                    />

                </FormGroup>

                <Button type='submit' text='Login' loading={props.session.loading} />
                OR
                <Link to='/register'><Button text='Register' disabled={props.session.loading} /></Link>
            </form>
        </Card>
    </>
}

const mapState = (state: RootState): P => ({ session: state.session, })
const mapD = (dispatch: Dispatch<any>): A => ({ dispatch });

export default connect(mapState, mapD)(LoginPage);