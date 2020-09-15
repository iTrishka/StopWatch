import React from 'react';
import styled from 'styled-components';


const DisplayStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    span{
        width: 40px;
        border: 2px solid #add8e6;
        background-color: #21809e;
        padding: 10px;
        margin-right: 10px;
        color: yellow;
        font-size: 25px;
    }
`

function Display(props){

    return(
        <DisplayStyle>
            <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>
            <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>
            <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>
            <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>
        </DisplayStyle>
    );
}

export default Display;