

import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLink from './signedInLinks'
import SignedOutLink from './signedOutLinks'
import { connect } from 'react-redux'







const Navbar = (props) => {

    console.log(props)

    const links = props.auth.uid ? <SignedInLink /> : <SignedOutLink />;

    return (


        <nav className="nav-wrapper grey darken-3">


            <div className="container">

                <Link to="/" className="brand-logo">  Mario Plan   </Link>
                {links}
            </div>



        </nav>



    )







}


const mapStateToProps = (state) => {

    return {

        auth: state.firebase.auth
    }


}




export default connect(mapStateToProps)(Navbar);