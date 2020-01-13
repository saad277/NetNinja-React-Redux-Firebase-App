
import React from 'react';
import ProjectSummary from './projectSummary';
import { Component } from 'react';
import { Link } from 'react-router-dom'






class ProjectList extends Component {



    render() {

       

        console.log("......."+this.props.projects)

        var summary;

        if (this.props.projects) {

            summary = this.props.projects.map((x, id) => {


                return (

                    <Link to={"/project/"+x.id}   key={id}   >

                        <ProjectSummary name={x.title} content={x.content}  />

                    </Link>
                )



            })
        }

        else {
            return (
                summary = `<h2>            No data             </h2>`
            )
        }

        return (


            <div className="project-list conainer">


                {summary}

            </div>



        )






    }






}




export default ProjectList;






