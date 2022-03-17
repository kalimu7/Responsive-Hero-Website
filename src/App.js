import React from "react";
import { GlobalStyle } from "./globalStyles";
import { Switch,BrowserRouter,Route,Routes } from 'react-router-dom'

//Pages
import Homepage from "./pages/Homepage";
import Pricingpage from "./pages/Pricingpage";
import Signuppage from "./pages/Signuppage";



function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/pricing' element={<Pricingpage />} />
      <Route exact path='/signup' element={<Signuppage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
