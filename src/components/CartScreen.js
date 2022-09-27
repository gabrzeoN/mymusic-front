import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./UserContext.js";
import Item from "./Item.js";
import { getCart } from "../services/cartApi.js";

export default function CartScreen(){
    const navigate = useNavigate();
    const [userCart, setUserCart] = useState(null);
    const [totalValue, setTotalValue] = useState(0);
    const {userData} = useContext(UserContext);
    const {token, image} = userData;

    function setCartValue(items){
        let value = 0;
        items.forEach(item => value += item.price) 
        setTotalValue(value);
        return;
    }

    async function loadCart(){
        try{
            const cart = await getCart(token);
            setCartValue(cart);
            setUserCart([...cart]);
            return;
        }catch(e){
            navigate("/");
            alert(e.response.data);
            return;
        }
    }
    useEffect(() => loadCart(), []);

    return (
        <Container>
            <Header>
            <div>
                    <ion-icon onClick={() => navigate("/home")} name="chevron-back-outline"></ion-icon>
                </div>
                <h1>Shopping Cart</h1>
                <img src={image} alt=""></img>
            </Header>
            <Main>
                {
                    userCart === null
                    ?
                        <h2>Loading cart...</h2>
                    :
                        userCart.length < 1
                        ?
                            <h2>Your shopping cart is empty</h2>
                        :
                            userCart?.map((item, index) => {
                                return <Item key={index} item={item}></Item>
                            })
                }
            </Main>
            <Footer>
                <div>
                    <p>Total {userCart ? userCart.length : 0} items</p>
                    <p>USD {totalValue}</p>
                </div>
                <Link to="/payment">
                    <button>Proceed to Payment</button>
                </Link>
            </Footer>
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 110px;

    h2{
        margin-top: 300px;
    }
`;

const Footer = styled.footer`
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 60px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;

    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 20px;
    }

    button{
        margin-top: 10px;
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