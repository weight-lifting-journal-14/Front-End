
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {loadWorkouts, addWorkouts,logout, updateWorkout, deleteWorkout} from './actions/index';
import styled from 'styled-components';


const Button = styled.button`
padding: 3px 5px 3px 5px;
margin: 3%;
color: #fffafa;
background: #22283a;
border-radius: 5px;
padding: 4px 8px 4px 8px;
font-size: 0.9rem;
border: 2px solid #dcdcdc;
margin-top:13%;
&:hover {
  color: gray;
  background: black;
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction:row;

`;

const FormWrapper = styled.form`
display: flex;
justify-content: center;
padding-bottom: 2%;
`;

const Input = styled.input`
width: 100%;
`;

const CardWrap = styled.section`
display: inline-grid;
padding: 10px;
`;

const Card = styled.div`
transition: transform 0.2s ease-in;
border-radius: 50px;
background: gray;
color: white;
width: 400px;
height: 375px;
max-height: 350px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding-top: 30px;
cursor: pointer;
box-shadow: 0px 6px 10px -2px black;
&:hover {
    transform: translateY(-2px) scale(1.2);
    background: lightgray;
    color: black;
`;
const Ps = styled.a`
font-weight: 600;
font-family: 'Noto Serif TC', serif;
`;

const ButtonWrap = styled.div`
display:flex;
justify-content: center;
flex-direction: row;
`;






const Workouts = ({id,loadWorkouts,workouts,addWorkouts,logout,history,updateWorkout,deleteWorkout}) => {

  const handleLogout = () => {
    logout()
    history.push('/');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  const [workoutForm, setWorkoutForm] = useState({id: '',name: '',date: '',user_id: ''});
  const [editWorkout, setEditWorkout] = useState(null);
  
  const handleChange = e => {
    setWorkoutForm(
      {
        ...workoutForm,
        [e.target.name]: e.target.value
      }
    )
  }
  const handleSubmit = e => {
    e.preventDefault();
    if(editWorkout){
      updateWorkout(id, editWorkout.id, workoutForm)
    }else{
      addWorkouts(workoutForm);
    }
  }
  const handleEdit = (workout) => {
    setEditWorkout(workout)
  }
  
  useEffect(() => {
    loadWorkouts(id);
 },[])

  useEffect(() => {
    if(editWorkout){
      setWorkoutForm({name: editWorkout.name, id:editWorkout.id, user_id: editWorkout.user_id})
    }
  },[editWorkout])
  return (
    <div>
      <h1>Create Workout</h1>
      <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input type ='text' name='name' value={workoutForm.name} onChange={handleChange} placeholder= 'Name'></Input>

        <ButtonWrapper>
        <Button type = 'submit'>Submit</Button>
        <Button onClick={() => {handleLogout()}}>Logout</Button>
        </ButtonWrapper>
      </form>
      </FormWrapper>
      
      {workouts.map(workout => {
        return (
        <CardWrap>
        <Card>
        <Ps href= {workout.id}>{workout.id}</Ps>
        <Ps>{workout.name}</Ps>
        <Ps>{workout.user_id}</Ps>
        <ButtonWrap>
        <Button onClick={() => deleteWorkout(id, workout.id)}>Delete Workout</Button>
        <Button onClick={() => {handleEdit(workout)} }>Edit Workout</Button>
        </ButtonWrap>
        </Card>
        </CardWrap>
        )
      })}
      
    </div>
  )
}
const mapStateToProps = (state) => {
  return {...state}
}

export default connect(mapStateToProps, {loadWorkouts,addWorkouts,logout, updateWorkout, deleteWorkout})(Workouts);
