import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .switch{
    position: relative;
    display: inline-block;
    margin-top: 30px;
    width: 36px;
    height: 20px;
  }

  .switch__input{
    width: 0;
    height: 0;
    opacity: 0;
  }

  .switch__slider{
    position: absolute;
    cursor: pointer;
    background-color: rgba(0,0,0, .22);
    top:0;
    left: 0;
    bottom: 0;
    right:0;
    border-radius: 50px;
    transition: all 0.3s ease;
  }

  .switch__input:disabled + .switch__slider{
    opacity: 0.4;
  }

  .switch__slider:before{
    position: absolute;
    content: '';
    bottom: 50%;
    right: 50%;
    top: -2px;
    height: 23px;
    width: 23px;
    border: 0.5px solid #ebebeb;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all 0.3s ease;
    transform: translateX(0%);
  }

  .switch__slider:hover:before{
    box-shadow: 0px 0px 0px 10px rgba(0,0,0,0.06);
  }

  .switch__input:disabled + .switch__slider:hover:before{
    box-shadow: none;
  }

  .switch__input:checked + .switch__slider:hover:before{
    box-shadow: 0px 0px 0px 10px rgba(137,3,255,0.06);
  }

  .switch__input:disabled:checked + .switch__slider:hover:before{
    box-shadow: none;
  }


  .switch__input:focus + .switch__slider:before{
    box-shadow: 0px 0px 0px 10px rgba(0,0,0,0.10);
  }

  .switch__input:focus:checked + .switch__slider:before{
    box-shadow: 0px 0px 0px 10px rgba(137,3,255,0.15);
    border: 0.5px solid rgba(137,3,255,0.15);
  }

  .switch__input:checked + .switch__slider:before{
    transform: translateX(100%);
    background-color: #6200eeff;
    border: 0.5px solid rgba(137,3,255,0.15);
  }

  .switch__input:disabled:checked + .switch__slider:before{
    border: 0.5px solid #ebebeb;
    background-color: #ffffff;
    opacity: 1;
  }

  .switch__input:checked + .switch__slider{
    background-color: #6200ee89;
  }

  .switch__input:disabled:checked + .switch__slider{
    background-color: rgba(0,0,0,0.10);
    opacity: 1;
  }

`

function Switch(props){
  return(
    <Container>
      <label className='switch'>
        {props.state ? <input type='checkbox' className='switch__input' /> : <input type='checkbox' className='switch__input' disabled='disabled'/>}
        <span className='switch__slider'></span>
      </label>
    </Container>
  )
}

export default Switch;
