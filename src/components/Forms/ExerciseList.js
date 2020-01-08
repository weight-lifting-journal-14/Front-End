import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../../axiosAuth';
import WorkOuts from './WorkOuts';
import UserLog from './UserLog';

export default function ExerciseList(props) {

    const [friends, setFriends] = useState([])


    const getData = () =>{
        axiosWithAuth().get('/workouts')
        .then(res => {
            setFriends(res.data)
             console.log(res.data)
            })
        .catch(err => console.log(err))
    }

    

    useEffect(()=>{
       getData()
    },[]);
    

    return (
        <div>
         <h3>Friends</h3>
         <UserLog/>
         <div>
         {
             friends.map(each => (
                 <div>
                <WorkOuts
                 name={each.name} age={each.age} email={each.email} />
                </div>
             ))
         }
         
         </div>
        </div>
    )
}

