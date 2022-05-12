import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {useContext} from "react";
import UserContext from "./UserContext";


export default function SignIn() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
   
    function login() {
        const URL = "http://127.0.0.1:5000/sign-in"; 
        const promise = axios.post(URL, {
            email,
            password
        });
        promise.then(response => {
            const { data } = response;
            setToken(data.token)
            {data.setToken === null ? navigate("/sign-up") : navigate("/home");}
            
        })
        promise.catch(err => {
            alert("Please insert correct data!")
        });
    }

    return (
        <Container>
            <p>MyMusic</p>
            <form onSubmit={login}>
                <input typeof="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input typeof="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" >Entrar</Button>
            </form>
            <StyledLink to="/sign-up">Did not have any account? Sign-up!</StyledLink>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.76) 100%), linear-gradient(180deg, #125038 0%, rgba(22, 199, 130, 0) 100%), url(https://th.bing.com/th/id/OIP.cIEl06ecEnsm0bJFPPryRAHaMB?pid=ImgDet&rs=1);
    form {
        display: flex;
        flex-direction: column;
    }
    p {
        width: 147px;
        height: 50px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
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
    line-height: 26px;
    text-align: center;
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