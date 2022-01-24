import React,{Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';



const MainRouter = () => {
    return ( 
        <Fragment>
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/menu' element={<Menu />}  />
            </Routes>
        </Fragment>
     );
}
 
export default MainRouter;