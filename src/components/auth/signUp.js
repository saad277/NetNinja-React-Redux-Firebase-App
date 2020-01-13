import React from 'react';
import { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'


class SignUp extends Component {


    state = {

        email:"",
        password: "",
        firstName:"",
        lastName:"",

    }


    inputHandler = (event) => {

        this.setState({

            [event.target.id]: event.target.value
        })


    }



    handleSubmit = (event) => {

        event.preventDefault();
        console.log(this.state)

        this.props.signUp(this.state)


    }

    render() {
        
        console.log(this.props)

        const { auth } = this.props

        if (auth.uid) {


            return <Redirect to="/" />

        }


        return (

            <div className="container form">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">       Sign Up         </h5>

                    <div className="input-field">

                        <label htmlFor="email">        Email             </label>
                        <input type="email" id="email" onChange={this.inputHandler} />


                    </div>

                    <div className="input-field">

                        <label htmlFor="password">        Password            </label>
                        <input type="password" id="password" onChange={this.inputHandler} />


                    </div>

                    <div className="input-field">

                        <label htmlFor="firstname">        First Name          </label>
                        <input type="text" id="firstName" onChange={this.inputHandler} />


                    </div>

                    <div className="input-field">

                        <label htmlFor="lastname">        Last Name            </label>
                        <input type="text" id="lastName" onChange={this.inputHandler} />


                    </div>

                    <div className="input-field">

                        <button className="btn pink lighten-1 z-depth-0">      Login         </button>

                    </div>



                </form>


            </div>




        );







    }




}


const mapStateToProps = (state) => {


    return {

       
        auth: state.firebase.auth
    }



}


const mapDispatchToProps=(dispatch)=>{


return {

    signUp:(credentials)=>{


            dispatch(  signUp(credentials)         )

    }

}




}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);