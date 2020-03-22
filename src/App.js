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
  margin-top: 30px;

  .header-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 80px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.45);
    background-color: #6202ee;
    color: white;
  }

  .main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 500px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.45);

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

  .input-container .input__active:disabled + label .title-placeholder{
    transform: translateY(-100%);
    font-size: 14px;
  }

  button{
    margin-top: 30px;
  }

`

function App() {
  const [state, updateState] = useState(true);
  const [text, updateText] = useState('');

  function handleDisable() {
    updateState(false);
  }

  function handleOnChange(e){
    updateText(e.target.value);
  }

  function handleEnable() {
    updateState(true);
  }

  return (
    <div className="App">
      <Container>
        <div className='header-container'>
         <h3>mandatory-uxdesign1</h3>
        </div>
        <div className='main-container'>
          <div className='input-container'>
            {state ? <input onChange={handleOnChange} required/> :
            text ? <input onChange={handleOnChange} className='input__active' required disabled='disabled'/> :
             <input onChange={handleOnChange} required disabled='disabled'/>}
            <label className='input-label'><span className='title-placeholder'>Text field</span></label>
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
