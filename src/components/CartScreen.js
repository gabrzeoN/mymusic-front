import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserContext from "./UserContext.js";
import Item from "./Item.js";
// {
//     "name": "AMERICAN PROFESSIONAL II STRATOCASTER®",
//     "image": "https://i0.wp.com/guitarload.com.br/wp-content/uploads/2018/04/fender-strat-tele-hybrid-nova-guitarra-1.png?fit=800%2C260&ssl=1",
//     "description": "The American Professional II Stratocaster® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today’s working player. \nOur popular Deep “C” neck now sports smooth rolled fingerboard edges, a “Super-Natural” satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Stratocaster single-coil pickups are more articulate than ever while retaining bell-like chime and warmth. An upgraded 2-point tremolo with a cold-rolled steel block increases sustain, clarity and high-end sparkle. \nThe American Pro II Stratocaster delivers instant familiarity and sonic versatility you’ll feel and hear right away, with broad ranging improvements that add up to nothing less than a new standard for professional instruments.",
//     "price": 1500
// }

export default function CartScreen(){
    const getCartURL = `http://localhost:5000/cart`;
    const [userCart, setUserCart] = useState(null);
    const [totalValue, setTotalValue] = useState(0);
    const {userData} = useContext(UserContext);
    const {token} = userData;

    const config = {
        headers: {
            // Authorization: `Bearer ${token}`
            Authorization: `Bearer 60109657-c9fb-41d2-9e93-ff416973b721`
        }
    }

    function setCartValue(items){
        let value = 0;
        items.forEach(item => value += item.price) 
        setTotalValue(value);
        return;
    }

    async function loadCart(){
        try{
            const {data: cart} = await axios.get(getCartURL, config);
            setCartValue(cart);
            console.log(cart)
            setUserCart([...cart]);
            return;
        }catch(e){
            alert(e.response.data);
            return;
        }
    }
    useEffect(() => loadCart(), []);

    return (
        <Container>
            <Header>
                <ion-icon name="chevron-back-outline"></ion-icon>
                <h1>Shopping Cart</h1>
                <ion-icon name="trash-outline"></ion-icon>
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
                <Link to="/success">
                    <button>Proceed to Checkout</button>
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
    background-color: lightblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    margin-bottom: 20px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 110px;
`;

const Footer = styled.footer`
    background-color: lightblue;
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
        width: 300px;
        height: 40px;
        background-color: lightgreen;
        border: 1px solid black;
        border-radius: 5px;
    }
`;