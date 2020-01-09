import React from 'react'




const WorkOuts = (props) =>{
    return(
        <div>
            <p>ID: {props.id}</p>
            <p>Reps: {props.sets} </p>
            <p>Sets: {props.reps}</p>

        </div>
    )
}

export default WorkOuts;