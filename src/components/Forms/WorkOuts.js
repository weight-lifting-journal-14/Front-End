import React from 'react'




const WorkOuts = props =>{
    return(
        <div>
            <p>Name:</p>
            <p>Excercise:</p>
            <p>ID: {props.id}</p>
            <p>Reps: {props.sets} </p>
            <p>Sets: {props.reps}</p>
            <button>Edit</button>
            <button>Delete</button> 

        </div>
    )
}

export default WorkOuts;