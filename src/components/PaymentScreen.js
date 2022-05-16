import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./UserContext.js";

export default function PaymentScreen(){
    const postPurchaseURL = `http://localhost:5000/payment`;
    const navigate = useNavigate();

    const [address, setAddress] = useState("");
    const [creditCard, setCreditCard] = useState("");

    const {userData} = useContext(UserContext);
    const {token, image} = userData;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function purchase(e){
        e.preventDefault();
        try{
            const {data} = await axios.post(postPurchaseURL, {address, creditCard}, config);
            navigate("/success");
            return;
        }catch(e){
            alert(e.response.data);
            return;
        }
    }

    return (
        <Container>
            <Header>
            <div>
                <ion-icon onClick={() => navigate("/cart")} name="chevron-back-outline"></ion-icon>
                </div>
                <h1>Payment</h1>
                <img src={image} ></img>
            </Header>
            <Main>
                <form onSubmit={purchase}>
                    <input typeof="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <input typeof="number" placeholder="Credit card number" value={creditCard} onChange={(e) => setCreditCard(e.target.value)} /> 
                    <button type="submit" >Buy now</button>  
                </form>
            </Main>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    position: relative;
`;

const Header = styled.header`
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    margin-bottom: 20px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;

    img{
        width: 30px;
        height: 30px;
        margin-left: 20px;
        border-radius: 50%;
    }
`;

const Main = styled.main`
    color: #FFFFFF;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    form {
        display: flex;
        flex-direction: column;
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