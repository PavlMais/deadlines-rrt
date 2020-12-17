import { Button, FormGroup, H1, InputGroup, Intent, Card } from '@blueprintjs/core';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import usePromise from '../../utils/usePromise';
import { api_register } from './api'
import { passwordValidator, emailValidatpr } from '../../utils/validators'


type Inputs = {
    email: string,
    password: string
    repassword: string
}

const RegisterPage: React.FC = () => {
    const { call, error, loading } = usePromise(api_register)
    const { register, handleSubmit, watch, errors, setError, clearErrors } = useForm<Inputs>()

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

    return <Card className="bp3-dark">
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
                intent={errors.password && Intent.DANGER}>
                <InputGroup type='password' intent={errors.password && Intent.DANGER} name='password' inputRef={register(passwordValidator)} placeholder='Qwerty.12' />

            </FormGroup>
            <FormGroup
                label='Repeat password'
                helperText={errors.repassword && errors.repassword.message}
                intent={errors.repassword && Intent.DANGER}>
                <InputGroup
                    type='password'
                    name='repassword'
                    placeholder='Qwerty.12'
                    intent={errors.repassword && Intent.DANGER}
                    inputRef={register({
                        validate: (value) => value === watch('password') || 'Passwords doesn\'t match'
                    })}
                />
            </FormGroup>

            <Button type='submit' text='Register' loading={loading} />
                OR
                <Link to='/login'><Button text='Login' disabled={loading} /></Link>
        </form>
    </Card>
}

export default RegisterPage;

