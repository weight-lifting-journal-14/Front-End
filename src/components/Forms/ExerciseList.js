import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../../axiosAuth';
import WorkOuts from './WorkOuts';
import UserLog from './UserLog';

export default function ExerciseList(props) {

    const [workouts, setFriends] = useState([])


    const getData = () =>{
        axiosWithAuth().get('api/w-e')
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
         <h3>WorkOut History</h3>
         {/* <UserLog/> */}
         <div>
         {
             workouts.map(each => (
                 <div>
                <WorkOuts
                 id={each.id} 
                 sets={each.sets} 
                 reps={each.reps} />
                </div>
             ))
         }
         
         </div>
        </div>
    )
}

