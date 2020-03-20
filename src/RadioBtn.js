import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 30px;

  .radio__label{
    position: relative;
    width: 16px;
    height: 16px;
    display: block;
  }

  .radio__input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  .radio__checkmark{
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #00000089;
    border-radius: 50%;
    cursor: pointer;

    :hover{
      box-shadow: 0px 0px 0px 12px rgba(0,0,0,0.03);
    }
  }

  .radio__input:disabled + .radio__checkmark{
    :hover{
      box-shadow: none;
    }
  }

  .radio__input:checked + .radio__checkmark{
    border-color: #6200eeff;
  }

  .radio__input:disabled + .radio__checkmark{
    border-color: rgba(0,0,0, .22);
  }

  .radio__checkmark:after{
    position: absolute;
    content: '';
    display: none;
  }

  .radio__input:checked + .radio__checkmark:after{
    display: block;
  }

  .radio__input:focus + .radio__checkmark{
    box-shadow: 0px 0px 0px 12px rgba(137,3,255,0.15);
  }

  .radio__checkmark:after{
    background: #6200eeff;
    top:  17%;
    left: 17%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .radio__input:disabled + .radio__checkmark:after{
    background: rgba(0,0,0, .22);
  }

`
function RadioBtn(props){
  return(
    <Container>
      <label className='radio__label'>
        {props.state ? <input type='radio' className='radio__input' name='radio'/>:
        <input type='radio' className='radio__input' name='radio' disabled='disabled'/>}
        <span className='radio__checkmark' name='radio'></span>
      </label>
      <label className='radio__label' style={{marginTop: 30 + 'px'}}>
        {props.state ? <input type='radio' className='radio__input' name='radio'/>:
        <input type='radio' className='radio__input' name='radio' disabled='disabled'/>}
        <span className='radio__checkmark'></span>
      </label>
    </Container>
  )
}

export default RadioBtn;
