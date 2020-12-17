import { Button, FormGroup, H1, InputGroup, Intent, Card, Icon, Tooltip } from '@blueprintjs/core';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import usePromise from '../../utils/usePromise';
import { login } from './api'
import { passwordValidator, emailValidatpr } from '../../utils/validators'


type Inputs = {
    email: string,
    password: string
}

const LoginPage: React.FC = () => {
    const [ showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, errors, setError, clearErrors } = useForm<Inputs>()
    const { call, error, loading } = usePromise(login)


    const onSumbit = (data: Inputs) => call(data.email, data.password)
    

    useEffect(() => {
        if (error) {
            error.invalidParams.forEach((err: any) => {
                setError(err.field, { type: 'server', message: err.reason })
            })
        } else {
            clearErrors()
        }
    }, [clearErrors, error])


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

                <Button type='submit' text='Login' loading={loading} />
                OR
                <Link to='/register'><Button text='Register' disabled={loading} /></Link>
            </form>
        </Card>
    </>
}

export default LoginPage;


