import { Button, Card, Classes, H3, ProgressBar } from '@blueprintjs/core';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import usePromise from '../../utils/usePromise';
import useCached from '../../utils/useCache';
import AddDeadlineModal from './addDeadline'
import NoDeadlines from './noDeadlines';
import { Deadline } from '../../store/deadlines/types'
import './styles.css'

function get_deadlines() {
    var promise = new Promise((ok) => setTimeout(ok, 1000))
    var onThen = (data: any): Deadline[] => {
        return [
            {id: 1, title:'First deadline title'},
            {id: 2, title:'Second deadline title'},
            {id: 3, title:'Third deadline title'},
            {id: 4, title:'Fourth deadline title'},
            {id: 5, title:'Fifth deadline title'},
            {id: 6, title:'Sixth deadline title'},
        ];
    }
    var onCatch = (err: any) => {}

    return { promise, onThen, onCatch }
}



const DeadlinesPage: React.FC = () => {
    var { get, update, loading, error } = useCached('deadlines', get_deadlines)

    useEffect(update, [])

    var deadlines = get()

    if(deadlines == undefined || loading) 
        return <Card > Loading... </Card> 

    if(error) return <p>ERROR</p>

    if (deadlines.length == 0) return <NoDeadlines />
    
    const dls = deadlines.map((d) =>
        <Link to='deadline' key={d.id}>
            <Card interactive={true}>
                {d.title}
                <ProgressBar stripes={false} value={0.6} />
                <ProgressBar stripes={false} value={0.4} />
            </Card>
        </Link>
    )

    return <>
    <div className='header'>
        <div className='header-title' >Deadlines</div>  <Button className='add-deadline-btn' icon='plus'/>

    </div>
        {/* <Card>
            {dls}
        </Card> */}
        <AddDeadlineModal />
    </>
}

export default DeadlinesPage;





