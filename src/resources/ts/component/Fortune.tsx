import React, { useState, useEffect } from "react";
import Card from "../parts/Card";
import Overlay from "../Layouts/Overlay";
import ReactCardFlip from "react-card-flip";

const fortuneResult = [
    { fortune: "大吉", color: "text-red-500" },
    { fortune: "中吉", color: "text-blue-500" },
    { fortune: "吉", color: "text-green-500" },
    { fortune: "凶", color: "text-black" }
];
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
    const [fortune, setFortune] = useState({});
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
                        <div className="">
                            <p className="text-gray-50 mb-6 text-xl">
                                おみくじをタップしてね！
                            </p>
                            <div className="container" onClick={closeNav}>
                                <ReactCardFlip isFlipped={isFlipped}>
                                    <div
                                        className="bg-white py-20 px-20"
                                        onClick={flipCard}
                                    >
                                        <div className="flex flex-col text-red-600 text-xl font-bold">
                                            <span>お</span>
                                            <span>み</span>
                                            <span>く</span>
                                            <span>じ</span>
                                        </div>
                                    </div>
                                    <div
                                        onClick={flipCard}
                                        className="bg-white text-left m-auto text-xl py-10 px-10"
                                    >
                                        <p className='py-4'>
                                            今日の運勢は
                                            <span className={`text-2xl font-semibold ${fortune.color}`}>
                                                {fortune.fortune}
                                            </span>
                                            です
                                        </p>
                                        <p className="pb-4">
                                            <span className="text-blue-500">
                                                ラッキーアイテム
                                            </span>
                                            ：{item}
                                        </p>
                                        <p className="pb-4">
                                            <span className="text-green-500">
                                                ラッキーカラー
                                            </span>
                                            ：{color}
                                        </p>
                                        <p className="pb-4">
                                            今日も1日頑張ろう！！
                                        </p>
                                    </div>
                                </ReactCardFlip>
                            </div>
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
                                type="button"
                                onClick={closeMordal}
                            >
                                トップに戻る
                            </button>
                        </div>
                    </Overlay>
                </div>
            )}
        </>
    );
};

export default Fortune;
