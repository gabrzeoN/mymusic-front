import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {useContext} from "react";
import UserContext from "./UserContext";
import { signIn } from "../services/authApi.js";

export default function SignIn() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);
    
    async function login(e) {
        e.preventDefault();
        try {
            const user = await signIn({email, password}); 
            const {name, image, token} = user;
            setUserData({name, image, token});
            navigate("/home");
            
        } catch (error) {
            alert(error.response.data);
            
        }
    }

    return (
        <Main>
            <h1>MyMusic</h1>
            <form onSubmit={login}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" >Login</button>
            </form>
            <StyledLink to="/sign-up">I don't have an account!</StyledLink>
        </Main>
    )
}

const Main = styled.main`
    color: #FFFFFF;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.76) 100%), linear-gradient(180deg, #125038 0%, rgba(22, 199, 130, 0) 100%), url(https://th.bing.com/th/id/OIP.cIEl06ecEnsm0bJFPPryRAHaMB?pid=ImgDet&rs=1);
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    h1 {
        font-weight: bold;
        font-size: 42px;
        margin-bottom: 30px;
    }

    input {
        width: 300px;
        height: 50px;
        border: 3px solid #D5D5D5;
        border-radius: 5px;
        margin-top: 15px;
        padding: 10px;
        font-size: 17px;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 303px;
        height: 45px;
        background: var(--main-green);
        border-radius: 5px;
        border: 0px;
        margin-top: 24px;
        margin-bottom: 24px;
        font-size: 20px;
        color: #FFFFFF;
    }
`;

const StyledLink = styled(Link)`
    font-size: 20px;
    margin-top: 25px;
    color: white;
`;