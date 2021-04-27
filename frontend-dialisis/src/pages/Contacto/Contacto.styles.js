import styled, { createGlobalStyle, css } from "styled-components";

export const sharedStyles= css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 20px;
    box-sizing: border-box;
`
export const SDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    height:100vh;
    padding:0 20px;

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
    min-height:100px;
    resize:none;
    ${sharedStyles}

`
export const SButton = styled.button`
    display: block;
    background-color:lightblue;
    font-size: 20px;
    border:0;
    border-radius:5px;
    padding: 15 30px;
    cursor: pointer;
    box-sizing:border-box;


`
export const SFieldSet = styled.fieldset`
    

`
export const SError = styled.div`
    

`