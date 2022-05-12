
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";


export default function Signup() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    const navigate = useNavigate();

    function register() {
        const URL = "http://127.0.0.1:5000/sign-up";
        ;
        const promise = axios.post(URL, {
            email: email,
            name: name,
            image: image,
            password: password,
            confirmPassword: confirmPassword
        });
        promise.then(response => {
            const { data } = response;
            console.log(data);
            navigate("/");
        });
        promise.catch(err => {alert("Please insert valid data")
           });
    }

    return (<Container>
        <p>MyMusic</p>
        <input typeof="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input typeof="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input typeof="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
        <input typeof="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input typeof="text" placeholder="Repeat the password" value={confirmPassword} onChange={(e) => setConfirmpassword(e.target.value)} />
            <Button onClick={register}>Register</Button>
            
        <StyledLink to="/">already have an account? Login!</StyledLink>
    </Container>)
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

p {
   
width: 147px;
height: 50px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 50px;

color: black;
}
img {
      margin-bottom: 100px;
  }

input {
    width: 299px;
height: 52px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
margin-top: 16px;

font-family: 'DM Sans';;
font-style: normal;
color: black;
}
`;

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background:#0ACF83;
border-radius: 4.63636px;
margin-top: 24px;
margin-bottom: 24px;

font-family:'DM Sans';;
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;

color: #FFFFFF;
`
const StyledLink = styled(Link)`
  
font-family: 'DM Sans';;
  height: 17px;
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
margin-top: 25px;
color: #FFFFFF;
`;
