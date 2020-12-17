import { H1 } from '@blueprintjs/core'
import React from 'react'
import { Link } from 'react-router-dom'



const HomePage = () => {
    return <H1>Home
        <Link to='deadlines'>DEADLINES</Link>
         </H1>
}


export default HomePage;