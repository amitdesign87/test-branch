import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Signin2 from './components/Signin2';
import SignUp from './components/SignUp';
import Table10 from './components/Table10';
// import Logo from "./components/Logo";
import Table11 from './components/Table11';
import Table12 from './components/Table12';

import "./index.css";

const Root = (props) => {
  return (
    <div style={{ height: '100%' }}>
      <React.StrictMode>
        <BrowserRouter basename={"/"}>
          <Routes>
            <Route exact path={`/`} element={<Signin2 />} />
            <Route path={`signUp`} element={<SignUp />} />
            <Route path="/" element={<App />}>
              <Route path={`home`} element={<Table12 />} />
              <Route path={`t11`} element={<Table11 />} />
              <Route path={`t10`} element={<Table10 />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  )
}
const root = createRoot(document.getElementById("root"));
root.render(<Root />);

