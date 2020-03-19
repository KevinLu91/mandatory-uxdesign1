import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 30px;

  .checkbox__label{
    position: relative;
    width: 20px;
    height: 20px;
    display: inline-block;
  }

  input{
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;

  }

  .checkbox__checkmark{
    position: absolute;
    cursor: pointer;
    border: 2px solid #0000008a;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  .checkbox__input:disabled + .checkbox__checkmark{
    opacity: 0.4;
  }

  .checkbox__checkmark:before{
    position: absolute;
    content: '';
    bottom: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: none;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .checkbox__checkmark:hover:before{
    background: rgba(0,0,0,0.03);
  }

  .checkbox__input:disabled + .checkbox__checkmark:hover:before{
    background: none;
  }

  input:checked:focus + .checkbox__checkmark:before{
    background: rgba(137,3,255,0.15);
  }

  input:focus + .checkbox__checkmark:before{
    background: rgba(137,3,255,0.08);
  }

  input:checked + .checkbox__checkmark{
    background-color: #6200eeff;
  }

  input:disabled:checked + .checkbox__checkmark{
    background-color: rgba(0,0,0, .22);
  }

  .checkbox__checkmark:after{
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox__label input:checked + .checkbox__checkmark:after {
    display: block;
  }

  .checkbox__checkmark:after {
    left: 7px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

function Checkbox(props) {
  return(
    <Container>
      <label className='checkbox__label'>
        {props.state ?   <input className='checkbox__input' type='Checkbox'/> :   <input className='checkbox__input' type='Checkbox' disabled='disabled'/>}
        <span className='checkbox__checkmark'></span>
      </label>
    </Container>
  )
}

export default Checkbox;
