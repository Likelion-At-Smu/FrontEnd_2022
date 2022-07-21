import React from 'react';
import { Link, Outlet,useNavigate } from "react-router-dom";

const Menubar = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    };

    return (
        <div>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/movies">movies</Link>
                </li>
            </ul>

            <Outlet />

            <button onClick={goHome} type="button">홈으로 돌아가기</button>
        </div>
    );
};

export default Menubar;