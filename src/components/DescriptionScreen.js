import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./UserContext.js";

export default function DescriptionScreen(){
    const location = useLocation();
    const item = location.state;
    const {name, image, description, price, _id} = item;
    const showPrice = price.toFixed(2).replace(".", ",");
    
    const postItemToCartURL = `http://localhost:5000/cart`;
    const { userData } = useContext(UserContext)
    const {token} = userData;
    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function addToCart(){
        try{
            const {data} = await axios.post(postItemToCartURL,{name, image, description, price}, config);
            navigate("/cart");
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
                    <ion-icon onClick={() => navigate("/home")} name="chevron-back-outline"></ion-icon>
                </div>
                <h1>MyMusic</h1>
                <Link to="/cart">
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>
            </Header>
            <Main>
                <h1>{name}</h1>
                <p>{description}</p>
                <img src={image} ></img>
                <h2>USD {showPrice}</h2>
                <button onClick={() => addToCart()} >Add To Cart</button>
            </Main>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
`;

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
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 50px;

    h1{
        margin-top: 20px;
        font-weight: bold;
        font-size: 45px;
        line-height: 50px;
    }

    p{  
        margin-top: 20px;
        font-size: 20px;
        line-height: 25px;
        text-align: justify;
    }

    img{
        margin-top: 70px;
        width: 100%;
        height: auto;
    }

    h2{
        margin-top: 70px;
        font-weight: bold;
        color: var(--main-green);
    }

    button{
        margin-top: 20px;
        width: 300px;
        height: 40px;
        background-color: var(--main-green);
        border: 0px solid black;
        border-radius: 15px;
        color: white;
        font-size: 20px;
        font-weight: bold;
    }
`;