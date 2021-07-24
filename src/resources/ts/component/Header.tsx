import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderTop = styled.div`
    background-color: black;
`;

const Header = () => {
    return (
        <div className="bg-yellow-300">
            <div className="w-11/12 m-auto">
                <Link to='/topPage'>
                    <h1 className="text-center text-2xl text-gray-50 font-bold py-3">
                        Morning Happy
                    </h1>
                </Link>
            </div>
        </div>
    );
};

export default Header;
