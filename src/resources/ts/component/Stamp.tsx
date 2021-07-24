import React, { useState, useEffect } from "react";
import Card from "../parts/Card";
import styled from "styled-components";
import axios from "axios";

const StampCard = styled.div`
    width: 250px;
    height: 250px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: 1s;
    &:hover {
        transform: rotateY(180deg);
    }
`;

const FirstCard = styled.img`
    position: absolute;
    width: 100%;
    backface-visibility: hidden;
    top: 0;
    left: 0;
`;

const SecondCard = styled.img`
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    backface-visibility: hidden;
    top: 0;
    left: 0;
`;

const Stamp = () => {
    const [display, setDisplay] = useState(false);

    const getStamp = async () => {
        const data = await axios.get("api/punchin");
        console.log(data);
    };
    const openMordal = () => {
        setDisplay(!display);
        getStamp();
    };

    const closeMordal = () => {
        setDisplay(!display);
    };

    return (
        <div>
            <button onClick={openMordal}>
                <Card text={"スタンプを押す"} img={"shopping_stamp_card.png"} />
            </button>
            {display && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div>
                        <StampCard>
                            <FirstCard src="stamp0.png" alt="" />
                            <SecondCard src="stamp1.png" alt="" />
                        </StampCard>
                        <div className="text-center">
                            <button
                                onClick={openMordal}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-5 mr-3"
                            >
                                スタンプ押す
                            </button>
                            <button
                                onClick={closeMordal}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stamp;
