import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";
import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import HomeScreen from "./HomeScreen"
import DescriptionScreen from "./DescriptionScreen";
import CartScreen from "./CartScreen";
import PaymentScreen from "./PaymentScreen";
import SuccessScreen from "./SuccessScreen";

import "./../assets/reset.css";
import "./../assets/style.css";

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
                    <Route path="/description/:itemID" element={<DescriptionScreen />} /> 
                    <Route path="/cart" element={<CartScreen />} />
                    <Route path="/payment" element={<PaymentScreen />} />
                    <Route path="/success" element={<SuccessScreen />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;