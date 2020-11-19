import React, { Dispatch } from 'react'

import {Alignment, Navbar, Button} from '@blueprintjs/core'
import { connect } from 'react-redux'
import { RootState } from '../store'
import { Link } from 'react-router-dom'

interface P {

    session: SessionState
}
interface A {

    dispatch: Dispatch<any>
}

type Props = P & A


const avatar = (isLogined: boolean) => {
    if(isLogined)
        return <Button minimal={true} icon={"user"}/>
    else
        return <Link to='/login'>Login</Link>
}


const Nav: React.FC<Props> = (props: Props) =>{

    return <Navbar>
        <Navbar.Group align={Alignment.CENTER}>
        <Navbar.Heading>Blueprint</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />

        {avatar(props.session.isLogined)}


        </Navbar.Group>

    </Navbar>
}

const mapState = (state: RootState): P => ({ session: state.session, })
const mapD = (dispatch: Dispatch<any>): A => ({ dispatch });


export default connect(mapState, mapD)(Nav);