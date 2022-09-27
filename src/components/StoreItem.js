import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function StoreItem({item}){
    let {name, image, price} = item;
    price = price.toFixed(2).replace(".", ",");
    const navigate = useNavigate();

    async function showItemDescription(){
        navigate(`/description/${name}`, {state: item})
    }

    return (
        <StoreItemContent onClick={() => showItemDescription()}>
            <img src={image} alt=""></img>
            <p>{name}</p>
            <p>USD {price}</p> 
        </StoreItemContent>
    );
}

const StoreItemContent = styled.div`
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 326px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0px;
    img{
        height: 67px;
        width: auto;
        margin: 15px 0px;
    }

    p{
        margin-bottom: 10px;
    }

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;