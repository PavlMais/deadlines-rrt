import { Button, NonIdealState } from '@blueprintjs/core';
import React, { Dispatch } from 'react';
import { connect, Provider } from 'react-redux';





const NotExistPage: React.FC = () => {
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


export default NotExistPage;