import React from 'react';
import styled from 'styled-components';


const DisplayBtnStyle= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;

    div{
        width: 130px; 
        margin: 0 10px;
        :hover{
            cursor: pointer;
        }
        :active{
            color: #e8e8a7;
            border-color: #21809e;
        }
    }

`

const BtnStart = styled.div`
    border: 2px solid yellow;
    padding: 5px 0;
`
const BtnStop = styled.div`
    border: 2px solid red;
    padding: 5px 0;
`
const BtnReset = styled.div`
    border: 2px solid #0aca0a;
    padding: 5px 0;
`

const BtnResume = styled.div`
    border: 2px solid #e401e4;
    padding: 5px 0;
`



function DisplayBtn(props){

    return(
        <div> 
        {(props.status === 0)? 
            <DisplayBtnStyle> 
            <BtnStart onClick={props.start}> Start</BtnStart>
            </DisplayBtnStyle> 
            : ""
        }
        {(props.status === 1)? <DisplayBtnStyle> 
            <BtnStop onClick={props.stop}>Stop</BtnStop>
            <BtnReset onClick={props.reset}>Reset</BtnReset>
            </DisplayBtnStyle> 
            : ""
        }
        {(props.status === 2)? <DisplayBtnStyle> 
            <BtnResume onClick={props.resum}>Resume</BtnResume>
            <BtnReset onClick={props.reset}>Reset</BtnReset>
            </DisplayBtnStyle> 
            : ""
        }
        
        </div>
    );
}

export default DisplayBtn;