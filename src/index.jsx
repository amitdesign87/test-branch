import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Signin2 from './components/Signin2';
import SignUp from './components/SignUp';
import Table10 from './components/Table10';
import Table2 from './components/Table2';
import Table11 from './components/Table11';
import SelectBox from './components/SelectBox';
import SelectBox2 from './components/SelectBox2';
import SelectBox3 from './components/SelectBox3';
import SelectBox4 from './components/SelectBox4';
import Logo from './components/Logo';
import ForgetPassword from "./components/ForgetPassword";
import SetPassword from "./components/SetPassword";

import "./index.css";
import OtpVerification from "./components/OtpVerification";
import Success from "./components/Success";

const Root = (props) => {
  return (
    <div style={{ height: '100%' }}>
      <React.StrictMode>
        <BrowserRouter basename={"/"}>
          <Routes>
            <Route exact path={`/`} element={<Signin2 />} />
            <Route path={`signUp`} element={<SignUp />} />
            <Route path={`SetPassword`} element={<SetPassword />} />
            <Route path={`ForgetPassword`} element={<ForgetPassword />} />
            <Route path={`OtpVerification`} element={<OtpVerification />} />
            <Route path={`Success`} element={<Success />} />
            <Route path="/" element={<App />}>
              <Route path={`home`} element={<Table2 />} />
              <Route path={`t11`} element={<Table10 />} />
              <Route path={`select`} element={<SelectBox />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  )
}
const root = createRoot(document.getElementById("root"));
root.render(<Root />);

