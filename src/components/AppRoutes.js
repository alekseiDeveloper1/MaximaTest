import React from 'react';
import {Route, Routes} from "react-router-dom";
import ListPage from "../pages/ListPage.jsx";
import Login from "../pages/Login.jsx";
import PopupPage from "../pages/PopupPage";
const AppRouter = () => {
    let isAuth = true;
    return (
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'/list'} element={<ListPage/>}/>
            <Route path={'/add'} element={<PopupPage/>}/>
        </Routes>
    );
};

export default AppRouter;