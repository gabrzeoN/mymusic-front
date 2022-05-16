import React from "react";
import styled from "styled-components";
import { Link, useNavigate  } from "react-router-dom";
import {useContext} from "react";
import UserContext from "./UserContext";
import axios from "axios";



export default function SucessScreen() {
 
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const { image, name, token } = userData;
    const putLogoutURL = "https://mymusic-gabrielcari.herokuapp.com/sign-out";

    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function logout(){
        try{
            await axios.put(putLogoutURL, {}, config);
            navigate("/");
        }catch(error){
            alert(error.response.data);
        }
    }

    return (
        <Container>
           <Header>
                
                    <ion-icon onClick={() => logout()} name="log-out-outline"></ion-icon>
                    <img src={image}></img>
                
                <h1>MyMusic</h1>
                <Link to="/cart">
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>
            </Header>
            <p>Hi, {userData.name}</p>
            <h1>Enjoy your new instrument!</h1>
        <Link to="/"> <Button type="submit" >Buy more?</Button></Link> 
        </Container>
    )
}
const Header = styled.div`
  background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0px 20px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
    font-size: 30px;
   
    img{
        width: 30px;
        height: 30px;
        margin-left: 20px;
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
    text-decoration: none;
`
