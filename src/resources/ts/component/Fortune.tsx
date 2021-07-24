import React, { useState, useEffect } from "react";
import Card from "../parts/Card";
import Overlay from "../Layouts/Overlay";
import SlideIn from "../Layouts/SlideIn";
import ReactCardFlip from "react-card-flip";

const fortuneResult = ["大吉", "中吉", "吉", "凶"];
const luckyItem = [
    "鉛筆",
    "ペットボトル",
    "ノート",
    "携帯",
    "イヤホン",
    "消しゴム",
    "マッチ",
    "財布"
];
const luckyColor = [
    "ブルー",
    "ブラック",
    "レッド",
    "イエロー",
    "グリーン",
    "ホワイト"
];

const Fortune: React.FC = ({ closeNav }: any) => {
    const [display, setDisplay] = useState(false);
    const [fortune, setFortune] = useState("");
    const [comment, setComment] = useState("");
    const [color, setColor] = useState("");
    const [item, setItem] = useState("");

    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    const todoFortune = () => {
        const fortune =
            fortuneResult[Math.floor(Math.random() * fortuneResult.length)];
        setFortune(fortune);

        const item = luckyItem[Math.floor(Math.random() * luckyItem.length)];
        setItem(item);

        const color = luckyColor[Math.floor(Math.random() * luckyColor.length)];
        setColor(color);

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
                            <div className="container" onClick={closeNav}>
                                <ReactCardFlip isFlipped={isFlipped}>
                                    <div className="" onClick={flipCard}>
                                        <div className="flex flex-col">
                                            <span>お</span>
                                            <span>み</span>
                                            <span>く</span>
                                            <span>じ</span>
                                        </div>
                                    </div>
                                    <div onClick={flipCard}>
                                        <p className="">
                                            今日の運勢は{fortune}です
                                        </p>
                                        <p className="">
                                            ラッキーアイテムは{item}
                                        </p>
                                        <p className="">
                                            ラッキーカラーは{color}
                                        </p>
                                        <p className="">{comment}</p>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={closeMordal}
                            >
                                戻る
                            </button>
                        </SlideIn>
                    </Overlay>
                </div>
            )}
        </>
    );
};

export default Fortune;
