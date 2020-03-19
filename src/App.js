import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Switch from './Switch';
import Checkbox from './Checkbox';
import RadioBtn from './RadioBtn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 50px;
    border: 1px solid black;
  }

  .main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 500px;
    border: 1px solid black;

  }

  .input-container{
    position: relative;
    height: 56px;
    min-width: 280px;
    color: #616161;
    margin-top: 30px;
  }

  .input-container input{
    width: 100%;
    height: 100%;
    border: none;
    padding-left: 12px;
    outline: none;
    box-sizing: border-box;
  }

  .input-container input:hover{
    background: #f5f5f5;
  }

  .input-container input:disabled:hover{
    background: rgb(235, 235, 228);
  }


  .input-container label{
    position: absolute;
    left: 0;
    bottom: 0;
    color: rgba(0,0,0,.6);
    pointer-events: none;
    border-bottom: 1px solid #616161;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .1);
    border-radius: 4px 4px 0 0;
  }

  .input-container input:disabled + label{
    color: #8a8a8a;
    border-bottom: none;
  }


  .input-container input:focus + label{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: -1px;
    border-bottom: 2px solid #6200ee;
    transition: border 0.3s ease-in-out;
    background-color: rgba(0,0,0, .22);
  }

  .input-container .title-placeholder{
    position: absolute;
    bottom: 18px;
    transition: all 0.3s ease;
    margin-left: 12px;
  }

  .input-container input:focus + label .title-placeholder{
    transform: translateY(-100%);
    font-size: 14px;
    color: #6200ee;
  }

  .input-container input:valid + label .title-placeholder{
    transform: translateY(-100%);
    font-size: 14px;
  }

  button{
    margin-top: 30px;
  }
`

function App() {
  const [state, updateState] = useState(true);

  function handleDisable() {
    updateState(false);
    console.log(state);
  }

  function handleEnable() {
    updateState(true);
  }

  return (
    <div className="App">
      <Container>
        <div className='header-container'>
         <h3>Sign up</h3>
        </div>
        <div className='main-container'>
            <div className='input-container'>
              {state ? <input required/> : <input required disabled='disabled'/>}
              <label className='input-label'><span className='title-placeholder'>Name</span></label>
            </div>
            <div className='input-container'>
              {state ? <input required/> : <input required disabled='disabled'/>}
              <label className='input-label'><span className='title-placeholder'>Last Name</span></label>
            </div>


          <Switch state={state}/>
          <Checkbox state={state}/>
          <RadioBtn state={state}/>
          <button onClick={handleDisable}>Disable</button>
          <button onClick={handleEnable}>Enable</button>
        </div>
      </Container>
    </div>
  );
}

export default App;
