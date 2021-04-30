import styled, { css } from "styled-components";

export const sharedStyles= css`
    background-color: lightgray;
    height: 40px;
    border-radius: 5px;
    border: 1px solid lightblue;
    padding: 20px;
    box-sizing: border-box;
`
export const SDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    padding:30 20px;
`
export const SForm = styled.form`
    width: 100%;
    max-width: 700px;
    margin:40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing:border-box;
    box-shadow:3 3px 20px 3px rgba(0,0,0,0.2);
`
export const SInput = styled.input`
    display:block;
    width:250px;
    ${sharedStyles}
`
export const STextArea = styled.textarea`
    background-color: white;
    width: 80%;
    min-height:150px;
    resize:none;
    ${sharedStyles}
`
export const SButton = styled.button`
    display: block;    
    font-weight: bold;
    font-size: 1em;
    border:2px solid black;
    border-radius:3px;
    cursor: pointer;
`
export const SLabel = styled.label`
color: black;
padding:20px; 
font-weight: bold;
font-family:Arial;

`
