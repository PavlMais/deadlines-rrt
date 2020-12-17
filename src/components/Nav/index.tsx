import React, { Dispatch } from 'react'
import './Nav.css'
import { Alignment, Navbar, Button, Position, Tooltip } from '@blueprintjs/core'
import { connect } from 'react-redux'
import { RootState } from '../../store'
import { Link } from 'react-router-dom'
import { logout } from '../../services/session'
import { SessionState } from '../../store/session/types'

interface P {

    session: SessionState
}
interface A {

    dispatch: Dispatch<any>
}

type Props = P & A




const Nav: React.FC<Props> = (props: Props) => {
    
    const avatar = () => {
        
        if (props.session.isLogined)
            return (
                <Tooltip content={props.session.email} position={Position.RIGHT}>
                    <Button minimal={true} icon={"user"} onClick={() => props.dispatch(logout())} />
                </Tooltip>
    
            )
        else
            return <Link to='/login'><Button icon='log-in' text='Login'/></Link>
    }

    return <Navbar >
        <div className='nav'>

            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Blueprint</Navbar.Heading>


            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                {avatar()}

            </Navbar.Group>

        </div>

    </Navbar>
}

const mapState = (state: RootState): P => ({ session: state.session, })
const mapD = (dispatch: Dispatch<any>): A => ({ dispatch });


export default connect(mapState, mapD)(Nav);