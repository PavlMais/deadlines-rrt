import { Button, Card, ProgressBar, H2, Checkbox, Classes, AnchorButton} from '@blueprintjs/core';
import React, { Dispatch, useEffect } from 'react';
import { useForm, ValidateResult, ValidationRules } from 'react-hook-form'
import { connect, Provider } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { IconNames } from '@blueprintjs/icons'
import usePromise from '../../utils/usePromise';
import { get_deadline } from './api';

interface Props {
    id: number
}


const DeadlinePage = (props: Props) => {

    var {call, loading, data, error} = usePromise(get_deadline)

    useEffect(()=> call(props.id), [])

    const checkBoxes = data?.checkPoints.map((c) => <Checkbox label={c.title} checked={c.isChecked} />)


    var skeleton = loading ? Classes.SKELETON : ''


    return <>
        <Link to='/deadlines'><Button minimal={true} icon='arrow-left' text='Deadlines'/></Link>
        <Card>
            <H2 className={skeleton} >{data?.title || "Loading..." }</H2>
            <p className={'bp3-text-muted ' + skeleton}>deadline</p>
            <div className={skeleton}>
                Work <ProgressBar stripes={false} animate={false} value={0.3} />
            </div>
            <div className={skeleton}>
                Date <ProgressBar stripes={false} animate={false} value={0.7} />
            </div>


            {checkBoxes}
            <div>
                <Button text='Add check point' icon={IconNames.PLUS} />

            </div>
            <Button text='Delete' icon={IconNames.TRASH} intent='danger' />
            <Button text='Edit' icon='edit' intent='warning' />

        </Card>
    </>
}

export default DeadlinePage;