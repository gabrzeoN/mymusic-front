import styled from "styled-components";

export default function Item({item}){
    let {name, image, price} = item;
    price = price?.toFixed(2).replace(".", ",");

    return (
        <ItemContent>
            <img src={image} alt="" />
            <p>{name}</p>
            <div>
                <p>USD {price}</p>
                {/* <ion-icon name="trash-outline"></ion-icon> */}
            </div>
        </ItemContent>
    );
}

const ItemContent = styled.div`
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

        ion-icon{
            font-size: 25px;
        }
    }
`;