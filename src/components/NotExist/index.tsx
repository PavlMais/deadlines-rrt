import { Button, FormGroup, H1, InputGroup, Intent, Card, H3, ProgressBar, H2, Checkbox, Icon, NonIdealState } from '@blueprintjs/core';
import React, { Dispatch } from 'react';
import { useForm, ValidateResult, ValidationRules } from 'react-hook-form'
import { connect, Provider } from 'react-redux';
import { Link } from 'react-router-dom';

import { IconNames } from '@blueprintjs/icons'

import Session from '../../services/session'
import { RootState } from '../../store';



interface P {
    deadline: DeadlineState
}
interface A {
    dispatch: Dispatch<any>
}

type Props = P & A






const NotExistPage: React.FC<Props> = (props: Props) => {



    const checkBoxes = Array(7).fill(1).map((i) => <Checkbox label='Make service' />)


    return <>
        <NonIdealState
            icon='help'
            title='404 Page not found'
            description='There is nothing'
            action={
                <Button intent='primary' text='Home page'/>
            }
        />
    </>
}

const mapState = (state: RootState): P => ({ deadline: state.deadline, })
const mapD = (dispatch: Dispatch<any>): A => ({ dispatch });

export default connect(mapState, mapD)(NotExistPage);