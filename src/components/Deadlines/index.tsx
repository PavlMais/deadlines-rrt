import { Button, FormGroup, H1, InputGroup, Intent, Card, H3, ProgressBar } from '@blueprintjs/core';
import React, { Dispatch } from 'react';
import { useForm, ValidateResult, ValidationRules } from 'react-hook-form'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Session from '../../services/session'
import { RootState } from '../../store';

import AddDeadlineModal from './addDeadline'

interface P {
    deadline: DeadlineState
}
interface A {
    dispatch: Dispatch<any>
}

type Props = P & A


const cardClicked = () => {

}



const DeadlinesPage: React.FC<Props> = (props: Props) => {

    const dls = Array(20).fill(3).map((i) =>
        <Link to='deadline'>
            <Card interactive={true} onClick={cardClicked}>
                Make a website {i}
                <ProgressBar stripes={false} value={0.6} />
                <ProgressBar stripes={false} value={0.4} />
            </Card>
        </Link>
    )



    return <>
        <Card>
            Deadlines
        <Button text="Add deadline" />
            {dls}
        </Card>
        <AddDeadlineModal/>
    </>
}

const mapState = (state: RootState): P => ({ deadline: state.deadline, })
const mapD = (dispatch: Dispatch<any>): A => ({ dispatch });

export default connect(mapState, mapD)(DeadlinesPage);