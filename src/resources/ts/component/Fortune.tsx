import React, { useState, useEffect } from "react";
import Card from "../parts/Card";
import Overlay from "../Layouts/Overlay";
import SlideIn from "../Layouts/SlideIn";

const fortuneResult = ["大吉", "中吉", "吉", "凶"];



const Fortune: React.FC = () => {
    const [display, setDisplay] = useState(false);
    const [fortune, setFortune] = useState("");
    const [comment, setComment] = useState("");

    const todoFortune = () => {
        const fortune =
            fortuneResult[Math.floor(Math.random() * fortuneResult.length)];
        setFortune(fortune);

        setDisplay(!display);
        if (fortune === "大吉") {
            setComment("最高の1日だね！！");
        } else if (fortune === "凶") {
            setComment("まあ、そういう日もあるよね、、");
        } else if (fortune === "中吉") {
            setComment("いい1日になりますように！！");
        } else {
            setComment("まずまずの1日だね");
        }
    };

    const closeMordal = () => {
        setDisplay(!display);
    };

    return (
        <>
            <button onClick={todoFortune}>
                <Card text={"運勢"} img={"toast.png"} />
            </button>
            {display && (
                <div>
                    <Overlay>
                        <SlideIn>
                            <p className="py-9">今日の運勢は{fortune}です</p>
                            <p className="">{comment}</p>
                            <button
                                onClick={closeMordal}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
                            >
                                閉じる
                            </button>
                        </SlideIn>
                    </Overlay>
                </div>
            )}
        </>
    );
};

export default Fortune;
