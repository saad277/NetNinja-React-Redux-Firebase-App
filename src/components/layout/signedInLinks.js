
import React from 'react';
import { NavLink } from 'react-router-dom';

import {signOut} from '../../store/actions/authActions'
import {connect} from 'react-redux'



const SignedInLink = (props) => {

console.log(props)

    return (

        <ul className="right">

            <li> <NavLink to="/create">    New Project           </NavLink>           </li>
            <li> <NavLink to="/" onClick={props.signOut}>     Logout          </NavLink>           </li>
            <li> <NavLink to="/" className="btn btn-floating pink lighten-1">   NN             </NavLink>           </li>




        </ul>


    )



}


const mapDispatchToProps=(dispatch)=>{


return {

signOut:()=> dispatch(signOut())


}


}


export default connect(null,mapDispatchToProps)(SignedInLink);