
import React, { useState,useEffect } from "react";
import {connect} from 'react-redux';
import {register} from '../actions/index';
import styled from 'styled-components';

const size = {
  laptop: '1024px'
}
const device = {
  laptop: `(min-width: ${size.laptop})`
}

const RegTitle = styled.h1`
display: flex;
text-align: center
justify-content: center;
color: #3f048c;
font-size: 2.8rem;
margin: 0;
padding:2%;
padding-bottom: 7%;
font-family: 'Noto Serif TC', serif;
`;
const FormWrapper = styled.div`

display:flex;
justify-content: center;
`;
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
`;
const RegButton = styled.button`
display: flex;
justify-content: center;
padding: 3px 5px 3px 5px;
margin: 3%;
margin-top: 13%;
color: #fffafa;
background: #22283a;
border-radius: 5px;
padding: 4px 8px 4px 8px;
font-size: 0.8rem;
border: 2px solid #dcdcdc;
&:hover {
  color: gray;
  background: black;
}
`;
const MainWrapper = styled.div`
padding-bottom: 9%;
display:flex;
justify-content: center;
background-color: #24292e;

`;
const CTA = styled.div`
margin-top:18%;
border: 4px solid #3f048c;
border-radius: 10px;
padding: 70px 1px 120px 1px;
background-color: #000000;
width:75%;
font-family: 'Noto Serif TC', serif;
@media ${device.laptop} {
margin-top:12%;
border: 4px solid #3f048c;
border-radius: 10px;
padding: 70px 1px 120px 1px;
background-color: black;
width:40%;
font-family: 'Noto Serif TC', serif;
}

`;




const Input = styled.input`
padding-top: 2%;

`;



function Register(props) {
  const [login, setLogin] = useState({username: '', password: '' });
  const {id} = props
  useEffect(() => {
    if(id){
      props.history.push('/workouts')
    }
  },[id])

  const handleSubmit = e => {
    e.preventDefault();
    props.register(login)
    props.history.push("/workouts");
    setLogin({username: '', password: '' });
  };

  return (
    <MainWrapper>
    <CTA>
    <RegTitle>Register</RegTitle>
      <FormWrapper>
      
      <form className="formregister" onSubmit={handleSubmit}>
        
        <Input className='inputregister'
          value={login.username}
          name="username"
          type="text"
          onChange={e => setLogin({...login, username: e.target.value})}
          placeholder="username"
        />
        <Input className='inputregister'
          value={login.password}
          name="password"
          type="password"
          onChange={e => setLogin({...login, password: e.target.value})}
          placeholder="password"
        />
        <ButtonWrapper>
        <RegButton>
          Connect!
        </RegButton>
        </ButtonWrapper>
      </form>
    </FormWrapper>
    </CTA>
    </MainWrapper>
  );
}


const mapStateToProps = (state) => {
  return {...state}
}
export default connect(mapStateToProps, {register})(Register);