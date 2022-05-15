import styled from "styled-components";

export default function StoreItem({item}){
    let {name, image, description, price} = item;
    price = price.toFixed(2).replace(".", ",");

    return (
        <StoreItemContent>
            <img src={image}></img>
            <p>{name}</p>
            <p>USD {price}</p> 
        </StoreItemContent>
    );
}

const StoreItemContent = styled.div`
    background-color: lightgray;
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