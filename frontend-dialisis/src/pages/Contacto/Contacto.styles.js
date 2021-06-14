import styled, { css } from "styled-components";

export const sharedStyles= css`
    background-color: whitesmoke;
    height: 40px;
    border-radius: 20px;
    border: 3px solid black;
    padding: 20px;
    box-sizing: border-box;
    max-width: 100%;
`;
export const SDiv = styled.div`
    display:flex;
    justify-content: left;
    align-items:center;
`;
export const SForm = styled.form`
    width: 100%;
    max-width: 100%;
 
    margin: 20px;
    background-color:linear-gradient(165deg, #f5fffe 0, #e3fffb 8.33%, #cefff8 16.67%, #b5fff5 25%, #98fff3 33.33%, #73fdf2 41.67%, #3cf2f2 50%, #00e6f3 58.33%, #00dbf7 66.67%, #00d1fb 75%, #00c8ff 83.33%, #00beff 91.67%, #00b6ff 100%);
    border-radius: 10px;
    box-sizing:border-box;
    box-shadow:3 3px 20px 3px rgba(0,0,0,0.2);
    
`;
export const SInput = styled.input`
    display:block;
    width:380px;
    border-color:black;
    max-width: 100%;
    ${sharedStyles}
`;
export const STextArea = styled.textarea`
    background-color: white;
    width: 380px;
    max-width: 100%;
    min-height:150px;
    resize:none;
    ${sharedStyles}
`;
export const SButton = styled.button`
    display: block;    
    font-weight: bold;
    font-size: 14px;
    border:3px solid black;
    border-radius:10px;
    cursor: pointer;
    float: right;
    color: white;
    background-color: #2196f3;
`;
export const PError = styled.p`
color: red;
padding:5px; 
font-weight: bold;
font-family:Arial;
font-size:12px;
`;

export const Img1 = styled.img`
width: 600px;
height: 500px;
max-width: 100%;
align-items:right;
margin: 0 auto;
`;
export const ContImg = styled.div`
    justify-content: left;
    align-items:center;
    width: 100%;
    margin:0 auto;
`;
export const SH2 = styled.p`
padding:5px; 
font-weight: bold;
font-family:Arial;
font-size:18px;
margin: 0 auto;
`;
export const Container = styled.form`
    max-width: 1080px;
    margin:0 auto;
    width: 100%;
    display: 100%;
`;