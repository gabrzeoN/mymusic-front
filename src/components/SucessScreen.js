import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {useContext} from "react";
import UserContext from "./UserContext";



export default function SucessScreen() {
 
   
    const { userData } = useContext(UserContext);

    return (
        <Container>
            <Header>
            <p1>logout</p1>
            <p1>cart</p1>
            <logo>MyMusic</logo>
            <img src={userData.image} />
            </Header>
            <p>Hi, {userData.name}</p>
            <h1>Enjoy your new instrument!</h1>
        <Link to="/"> <Button type="submit" >Buy more?</Button></Link> 
        </Container>
    )
}
const Header = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;
position: fixed;
height: 35px;
top: 0;
left: 0;
right: 0;

p1 {
    font-size: 15px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
} 
logo {
    font-size: 15px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;

}

img {
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
`
const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF;
    form {
        display: flex;
        flex-direction: column;
    }
    p {
        width: 147px;
        height: 50px;
        font-family: 'DM Sans';
        font-style: normal;
      
        font-size: 25px;
        line-height: 50px;
        margin-bottom: 30px;
        color: black;
    }

    img {
        margin-bottom: 100px;
    }

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 16px;
        font-family: 'DM Sans';
        font-style: normal;
        color: black;
    }
    h1 {
        font-style: normal;
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 20px;
    }
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;
    margin-top: 24px;
    width: 303px;
    height: 45px;
    background:#0ACF83;
    border-radius: 4.63636px;
    font-family:  'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    color: #FFFFFF;
`
const StyledLink = styled(Link)`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-family: 'DM Sans';
`;