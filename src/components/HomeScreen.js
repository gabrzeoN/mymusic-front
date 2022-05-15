import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import Item from "./Item.js"

export default function HomeScreen() {
    const getStoreURL = `http://localhost:5000/store`;
    const [storeItems, setStoreItems] = useState(null);
    const [itemsOnDisplay, setItemsOnDisplay] = useState(null);
    const { userData } = useContext(UserContext)
    // const {name, image, token} = userData;
    const name = "Gabriel", image = "https://http.cat/200", token = "60109657-c9fb-41d2-9e93-ff416973b721";
    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function getAllItems() {
        try{
            const {data: items} = await axios.get(getStoreURL, config);
            console.log(items);
            setStoreItems([...items]);
            setItemsOnDisplay([...items]);
            return;
        }catch(e){
            alert(e.response.data);
            return;
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
                    <ion-icon name="log-out-outline"></ion-icon>
                    <img src={image}></img>
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
                    <button onClick={() => filterItemsOnDisplay("eletric-guitar")}      >Eletrics</button>
                    <button onClick={() => filterItemsOnDisplay("accoustic-guitar")}    >Accoustics</button>
                    <button onClick={() => filterItemsOnDisplay("bass")}                >Basses</button>
                    <button onClick={() => filterItemsOnDisplay("guitar-amps")}         >Guitar Amps</button>
                    <button onClick={() => filterItemsOnDisplay("bass-amps")}           >Bass Amps</button>
                </section>
                <section className="items-on-display">

                </section>
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
                                return <Item key={index} item={item}></Item>
                            })
                }
            </Main>
        </Container>
    )
}


const Container = styled.div`
    background-color: yellow;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    background-color: lightblue;
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
    background-color: green;
    margin-top: 70px;
    flex-wrap: nowrap;
    .welcome{
        background-color: blue;
    }

    .filter{
        width: 100%;
        display: flex;
        /* flex-wrap: nowrap; */
        overflow-x: scroll;
        button{
            width: 100px;
            height: 30px;
            background-color: lightgreen;
            border-radius: 50px;
            margin: 0px 5px;
        }
    }

    .items-on.display{
        background-color: lightgray;
    }
`;