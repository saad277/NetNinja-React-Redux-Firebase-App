import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'


class SignIn extends Component {


    state = {

        email: "",
        password: "",

    }


    inputHandler = (event) => {

        this.setState({

            [event.target.id]: event.target.value
        })


    }



    handleSubmit = (event) => {

        event.preventDefault();


        this.props.signIn(this.state)


    }

    render() {

        console.log(this.state)


        const { auth } = this.props

        if (auth.uid) {


            return <Redirect to="/" />

        }




        return (

            <div className="container form">

                <form onSubmit={this.handleSubmit} className="white">

                    <h5 className="grey-text text-darken-3">       Sign In         </h5>

                    <div className="input-field">

                        <label htmlFor="email">        Email             </label>
                        <input type="email" id="email" onChange={this.inputHandler} />


                    </div>

                    <div className="input-field">

                        <label htmlFor="password">        Password            </label>
                        <input type="password" id="password" onChange={this.inputHandler} />


                    </div>

                    <div className="input-field">

                        <button type="submit" className="btn pink lighten-1 z-depth-0">      Login         </button>

                        <div className="red-text center ">

                            {this.props.authError ? <p>   {this.props.authError}   </p> : null}
                        </div>

                    </div>



                </form>


            </div>




        );







    }




}



const mapDispatchToProps = (dispatch) => {



    return {

        signIn: (credentials) => {


            dispatch(

                signIn(credentials)

            )

        }

    }


}


const mapStateToProps = (state) => {


    return {

        authError: state.auth.authError,
        auth: state.firebase.auth
    }



}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);