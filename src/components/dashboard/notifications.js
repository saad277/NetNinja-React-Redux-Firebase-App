import React from 'react';
import { Component } from 'react';
import moment from 'moment'



const Notifications = (props) => {


    const {notifications}=props;


    return (


        <div className="section">

            <div className="card z-depth-0">

                <div className="card-content">

                    <span className="card-title">    Notification   </span>

                <ul className="notifications">

                        {    notifications && notifications.map(x=>{

                                return (

                                    <li key={x.id}>  
                                    
                                        <span className="pink-text">  {x.user}    </span>
                                        <span> {x.content} </span>
                                        <span className="grey-text note-date">

                                  
                                       

                                        </span>
                                        <p>  {moment(x.time.toDate()).format('LT')}   </p>
                                          </li>
                                )

                        })   }


                </ul>


                </div>


            </div>


        </div>



    )





}

export default Notifications;