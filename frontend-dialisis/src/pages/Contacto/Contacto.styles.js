import styled, { css } from "styled-components";

export const sharedStyles= css`
    background-color: #eee;
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
    height:80vh;
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
    width:100%;
    ${sharedStyles}

`
export const STextArea = styled.textarea`
    background-color: white;
    width: 100%;
    min-height:150px;
    resize:none;
    ${sharedStyles}

`
export const SButton = styled.button`
    display: block;
    
    font-size: 1em;
    border:2px solid black;
    border-radius:3px;
    
    cursor: pointer;
    


`
export const S = styled.fieldset`

`
export const SLabel = styled.label`
color: black;
padding:15px; 
font-weight: bold;


`