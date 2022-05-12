import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";
import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import HomeScreen from "./HomeScreen"

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
                    <Route path="/home" element={<HomeScreen />} /> 
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;