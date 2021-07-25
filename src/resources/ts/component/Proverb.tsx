import React, { useState } from "react";
import TextAnimation from "../Layouts/TextAnimation";
import Card from "../parts/Card";

const ProverbList = [
    "人は心が愉快であれば終日歩んでも嫌になることはないが、心に憂いがあればわずか一里でも嫌になる。人生の行路もこれと同様で、人は常に明るく愉快な心をもって人生の行路を歩まねばならぬ。",
    "たいていの人はほんとうになにがほしいのか、心の中でわかっています。人生の目標を教えてくれるのは直感だけ。ただ、それに耳を傾けない人が多すぎるのです。",
    "自分には何らかの才能があるのだと信じなければならない。そして何としても、それを実らせなければならない。"
];

const Proverb = () => {
    const [display, setDisplay] = useState(false);
    const [proverb, setProverb] = useState("");
    const openMordal = () => {
        setDisplay(!display);
        const proverb =
            ProverbList[Math.floor(Math.random() * ProverbList.length)];
        setProverb(proverb);
    };

    return (
        <>
            <button onClick={openMordal}>
                <Card text={"格言"} img={"coffee.png"} />
            </button>
            {display && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className=" bg-gray-50 w-11/12 m-auto p-3">
                        <p className="text-2xl font-bold py-2 text-red-500">
                            今日の格言
                        </p>
                        <section id="souseki">
                            <div className="whitespace-pre-line text-lg py-3">
                                <TextAnimation section="souseki">
                                    {proverb}
                                </TextAnimation>
                            </div>
                        </section>
                        <div className="text-center">
                            <button
                                onClick={openMordal}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Proverb;
