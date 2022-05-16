import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PaymentScreen(){
    const navigate = useNavigate();

    return (
        <Main>
            <h1>Successful purchase!</h1>
            <button onClick={() => navigate("/home")}>Keep Shopping</button>  
        </Main>
    );
}

const Main = styled.main`
    color: black;
    font-size: 30px;
    font-weight: bold;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 303px;
        height: 45px;
        background: var(--main-green);
        border-radius: 5px;
        border: 0px;
        margin-top: 80px;
        margin-bottom: 24px;
        font-size: 20px;
        color: #FFFFFF;
    }
`;