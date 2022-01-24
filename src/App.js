import React, { Fragment } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import Router from './router'
const App = () => {
    const navigate = useNavigate();
    
    const handleNavigate = ()=> navigate('/menu')
 
    return ( 
    <Fragment>

        <Link to='/'>Ir para página Home</Link>
        <br />
        <br />
        <button onClick={handleNavigate} >Ir para a Página Menu</button>
        
        <Router />
    </Fragment>
    );
}
 
export default App;