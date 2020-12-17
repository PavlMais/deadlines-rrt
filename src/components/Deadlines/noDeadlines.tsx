import { Button, NonIdealState } from '@blueprintjs/core';
import React, { Dispatch } from 'react';
import { connect, Provider } from 'react-redux';





const NoDeadlines: React.FC = () => {
    return <NonIdealState
            icon='inbox'
            title='There are no deadlines yet'
            description='Create you first deadline'
            action={
                <Button intent='primary' text='Create deadline'/>
            }
        />
}


export default NoDeadlines;