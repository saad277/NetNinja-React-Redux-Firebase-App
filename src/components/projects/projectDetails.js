
import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'




const ProjectDetails = (props) => {

    const id = props.match.params.id;

    console.log(props)

    const { projects,auth } = props;


    

    if(!auth.uid) {


            return <Redirect to="/signin"  /> 

    }



    return (

        <div className="container section project-details">

            <div className="card z-depth-0">

                <div className="card-content">

                    <span className="card-title">  Project  Title - {id}  </span>
                    <p>        {projects}   aaaa       </p>
                </div>


                <div className="card-action gret lighten-4 grey-text">
                    <div >        Posted By the Net Ninja      </div>
                    <div>          2nd september 2am                             </div>

                </div>

            </div>


        </div>




    );




}

const mapStateToProps = (state, ownProps) => {

    const id = ownProps.match.params.id;

    const projects = state.firestore.data.projects;

    const project = projects ? projects[id] : null

    return {
        project: project,
        auth:state.firebase.auth

    }



}


export default compose(

    connect(mapStateToProps),
    firestoreConnect([
        { "collection": "projects" }

    ])

)(ProjectDetails);