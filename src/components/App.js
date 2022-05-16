import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";
import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SucessScreen from "./SucessScreen";

function App() {
    const [userData, setUserData] = useState({
        name: null,
        image: null,
        token: null
    });

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} /> 
                    <Route path="/sign-up" element={<SignUp />} /> 
                    <Route path="/sucess" element={<SucessScreen />} /> 
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;