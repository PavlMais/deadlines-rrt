import { Button, FormGroup, H1, InputGroup, Intent, Card, H3, ProgressBar, H2, Checkbox, Icon } from '@blueprintjs/core';
import React, { Dispatch } from 'react';
import { useForm, ValidateResult, ValidationRules } from 'react-hook-form'
import { connect, Provider } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { IconNames } from '@blueprintjs/icons'

import Session from '../../services/session'
import { RootState } from '../../store';


interface RP {
    id: number
}

interface P {
    deadline: DeadlineState
}
interface A {
    dispatch: Dispatch<any>
}

type Props = RP & P & A


const cardClicked = () => {

}



const DeadlinePage = (props: Props) => {


    const checkBoxes = Array(7).fill(1).map((i) => <Checkbox label='Make service' />)


    return <>
        <Card>
            <H2>Make website {props.id}</H2>
            <p className={'bp3-text-muted'}>deadline</p>
        Work <ProgressBar stripes={false} animate={false} value={0.3} />
        Date<ProgressBar stripes={false} animate={false} value={0.7} />



            {checkBoxes}
            <div>
                <Button text='Add check point' icon={IconNames.ADD} />

            </div>
            <Button text='Delete' icon={IconNames.DELETE} intent='danger' />
            <Button text='Edit' intent='warning' />

        </Card>
    </>
}

const mapState = (state: RootState): P => ({ deadline: state.deadline, })
const mapD = (dispatch: Dispatch<any>): A => ({ dispatch });

export default connect(mapState, mapD)(DeadlinePage);