import React from 'react';



const ProjectSummary = (props) => {


    return (


        <div className="card z-depth-0 project-summary">

            <div className="card-content grey-text text-darken-3">


                <span className="card-title">   {props.name}       </span>
                <p>           {props.content}        </p>
                <p className="grey-text">     3rd Septemder, 2am           </p>

            </div>

        </div>


    )





}

export default ProjectSummary;