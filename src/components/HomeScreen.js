import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./UserContext";

export default function HomeScreen() {
    const { userData } = useContext(UserContext)
    const{name, image, token} = userData;
    console.log(token);
    const config = {
        headers: { "Authorization": `Bearer ${token}` }
    }

    console.log(dados)

    const navigate = useNavigate();

    function excluir() {
        const URL = "http://127.0.0.1:5000/home";
        ;
        const promise = axios.delete(URL, config);
        promise.then(response => {
            const { data } = response;
            console.log(data);
            navigate("/subscriptions");
        });
        promise.catch(err => {
            console.log("Erro ao deletar")
        });
    }

    useEffect(() => {
        const promise = axios.get("http://127.0.0.1:5000/add-value", config)
        promise.then((result) => {
            console.log(result.data)
        })
        promise.catch((err) => {
            console.log(err)
        })
    }, [])

    return (<Container>
        <Topo>
            <h1 className="icon">Olá, {name} </h1>
           
        </Topo>
        <Main>
            <h1>Não há registros de entrada ou saída </h1>
        </Main>
        <Menu>
            <Link to="/new-entry"><Button1 className="alterar" >
               
                <h1>Nova entrada</h1>
                </Button1>
            </Link>
            <Link to="/new-retire">
                <Button2 onClick={excluir} className="cancelar">
                   
                     <h1>Nova saída</h1>
                </Button2>
            </Link>
        </Menu>
    </Container>
    )
}


const Container3 = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        `;
const Container = styled.div`
width: 100%;
height: 100vh;
padding: 31px;

`;
const Topo = styled.div`
width: 100%;
position: absolute;
left: 0;
right: 0;
top: 25px;
display: flex;
justify-content: space-around;

.imagem {
    
left: 87.47%;
right: 6.4%;
top: 4.2%;
bottom: 92.2%;


}

h1 {
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
}
`;

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 78px;

h1 {
width: 180px;
height: 46px;

font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;

color: #868686;}
`
const Menu = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-top: 13px;
`;
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #FF4791;
border-radius: 4.63636px;
margin-top: 10px;
margin-bottom: 24px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;

`
const Button1 = styled.div`
width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-around;
img {width: 22px;
height: 22px;
}
h1 {font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;

color: #FFFFFF; }
`;
const Button2 = styled.div`

width: 156px;
height: 114px;
background: #A328D6;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: space-around;

img {width: 22px;
height: 22px;
}
h1 {font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;

color: #FFFFFF; }
`;