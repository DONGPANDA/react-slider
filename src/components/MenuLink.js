/**
 * Created by 96004 on 2017/7/27.
 */
import React from 'react';
import {Route,Link} from 'react-router-dom';
export default ({to,label,exact})=>(
    <Route exact={exact} path={to} children={
        ({match})=>(
            <li className={match?'active':''}><Link to={to}>{label}</Link></li>
        )
    }/>
)