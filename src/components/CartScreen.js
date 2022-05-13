import axios from "axios";
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import UserContext from "./UserContext.js";

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
            Authorization: `Bearer 04750018-3a2f-49da-aa6a-28e7c3b82c56`
        }
    }

    async function loadCart(){
        try{
            const {data: cart} = await axios.get(getCartURL, config);
            console.log(cart)
            setUserCart([...cart]);
            return;
        }catch(e){
            console.log(e.response.data); // TODO: trocar para alert
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

            </Main>
            <Footer>
                <p>Total price ${totalValue}</p>
                <button>Proceed to Checkout</button>
            </Footer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-around;
`;

const Main = styled.main`
    display: flex;
    justify-content: space-around;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
`;