// import './entry.css'
import {LoginForm} from '../../components/login/login'
import {Jumbotron} from 'react-bootstrap'
export const Entry =()=>{
    return(
        <div className='entry-page bg-info'>
            <Jumbotron>
                <LoginForm/>
            </Jumbotron>
        </div>
    )
}


// export default Entry