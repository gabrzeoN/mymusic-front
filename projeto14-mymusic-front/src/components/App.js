import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./Usecontext";
import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import HomeScreen from "./HomeScreen"




function App() {
    const [token, setToken] = useState("");
    const [dados, setDados] = useState("");
    const [logo, setLogo] = useState("");
    const [name, setName] = useState("");


    return (
        <UserContext.Provider value={{ token, setToken, dados, setDados, logo, setLogo, name, setName }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} /> 
                    <Route path="/sign-up" element={<SignUp />} /> 
                    <Route path="/home" element={<HomeScreen />} /> 
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;

