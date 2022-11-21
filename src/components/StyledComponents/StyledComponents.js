import styled from 'styled-components';


export const Title = styled.h1 `
    color: #282c34;
`;

export const Wrapper = styled.div`
    background-color:#adc1c4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 0px;
    width: 100%;    
`;

export const Form = styled.form`
    display: block;
    margin: auto;
    width: 300px;
    height: 220px;
    align-items: column;
    border: 2px solid grey;
    border-radius: 5px;
`
export const FormInput =styled.input`
    display: flex;
    justify-content: center;
    width: 90%;
    height: 40px;
    border-radius: 5px;
    margin: 10px;
`
export const Button = styled.button`
    background-color: #98a8bd;
    width: 80%;
    height: 50px;
    border-radius: 5px;
`

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin: 10px;
    flex-wrap: wrap;
`
export const Image = styled.img`
    justify-content: left;
    margin-left: 30px; 
`
export const NavWrapper = styled.div`
    background-color: #adc1c4;
    width: 100%;
    height: 50px;
    margin: auto;
    display: flex;
    justify-content: space-space-between;
    border: 2px solid grey;
`
