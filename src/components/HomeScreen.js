import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { useEffect } from "react";
import UserContext from "./UserContext";
import StoreItem from "./StoreItem.js"
import { signOut } from "../services/authApi";
import { getStore } from "../services/storeApi";

export default function HomeScreen() {
    const [storeItems, setStoreItems] = useState(null);
    const [itemsOnDisplay, setItemsOnDisplay] = useState(null);
    const { userData } = useContext(UserContext)
    const {name, image, token} = userData;
    const navigate = useNavigate();

    async function getAllItems() {
        try{
            const items = await getStore(token);
            setStoreItems([...items]);
            setItemsOnDisplay([...items]);
            return;
        }catch(e){
            navigate("/");
            alert(e.response.data);
            return;
        }
    }

    async function logout(){
        try{
            await signOut(token);
            navigate("/");
        }catch(error){
            alert(error.response.data);
        }
    }

    function filterItemsOnDisplay(category){
        const items = storeItems.filter(item => item.type === category);
        setItemsOnDisplay([...items]);
    }

    useEffect(() => getAllItems(), [])

    return (
        <Container>
            <Header>
                <div>
                    <ion-icon onClick={() => logout()} name="log-out-outline"></ion-icon>
                    <img src={image} alt=""></img>
                </div>
                <h1>MyMusic</h1>
                <Link to="/cart">
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>
            </Header>
            <Main>
                <section className="welcome">
                    <p>Hi, {name}</p>
                    <p>What are you looking for today?</p>
                </section>
                <section className="filter">
                    <button onClick={() => filterItemsOnDisplay("eletric-guitar")}      >ELETRICS</button>
                    <button onClick={() => filterItemsOnDisplay("accoustic-guitar")}    >ACCOUSTICS</button>
                    <button onClick={() => filterItemsOnDisplay("bass")}                >BASSES</button>
                    <button onClick={() => filterItemsOnDisplay("guitar-amp")}         >GUITAR AMPS</button>
                    <button onClick={() => filterItemsOnDisplay("bass-amp")}           >BASS AMPS</button>
                </section>
                <section className="items-on-display">
                    {
                        itemsOnDisplay === null
                        ?
                            <h2>Loading cart...</h2>
                        :
                        itemsOnDisplay.length < 1
                            ?
                                <h2>There is nothing to display</h2>
                            :
                            itemsOnDisplay?.map((item, index) => {
                                    return <StoreItem key={index} item={item}></StoreItem>
                                })
                    }
                </section>
            </Main>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
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
    img{
        width: 30px;
        height: 30px;
        margin-left: 20px;
        border-radius: 50%;
    }

`;

const Main = styled.main`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    .welcome{
        padding: 0px 20px;
        p:first-child{
            font-size: 15px;
            margin: 10px 0px;
        }
        p:last-child{
            font-size: 35px;
            margin: 10px 0px;
        }
    }

    .filter{
        width: 100%;
        display: flex;
        overflow-x: scroll;
        button{
            color: white;
            min-width: 130px;
            height: 30px;
            background-color: var(--main-green);
            border-radius: 50px;
            border: 0px;
            font-size: 15px;
            font-weight: bold;
            margin: 10px 5px;
        }
    }

    .items-on-display{
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .items-on-display:last-child{
        margin-bottom: 80px;
    }
`;