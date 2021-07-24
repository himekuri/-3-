import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackColor = styled.div`
    background-color: #f0ede3;
    height: 100vh;
`;

const MainPage = () => {
    return (
        <BackColor>
            <div className="pt-24">
                <div className="bg-yellow-300 w-7/12 m-auto">
                    <h1 className="text-4xl text-gray-50 pl-10 font-bold py-10">
                        Happy <br /> Morning
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                <Link to="/LogInPage">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        ログイン
                    </button>
                </Link>
                <Link to="/SignUpPage">
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        新規登録
                    </button>
                </Link>
            </div>
        </BackColor>
    );
};

export default MainPage;
