import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import { Home } from "../components/Home";
import { Us } from "../components/Us";
import { NavBar } from "../ui/NavBar";
import { PrivateRoute } from "./PrivateRoute";
  export const AppRouter = () => {
      const isLoggedIn = true;
      return (
        <>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path='/' element={<PrivateRoute isLoggedIn={isLoggedIn}/>}>
                <Route exact path='/us' element={<Us/>}/>
              </Route>
            </Routes>
          </Router>
        </>
      );
    };
        