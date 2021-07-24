import React, { useState } from "react";
import TextAnimation from "../Layouts/TextAnimation";
import Card from "../parts/Card";

const ProverbList = [
    "吾輩は猫である。 名前はまだ無い。\n 夏目漱石",
    "なるようになる \n 全力を尽くせ"
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
                    <div className=" bg-gray-50 w-9/12 m-auto p-5">
                        <section id="souseki">
                            <div className="whitespace-pre-wrap">
                                <TextAnimation section="souseki">
                                    {proverb}
                                </TextAnimation>
                            </div>
                        </section>
                        <div className="text-center">
                            <button
                                onClick={openMordal}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
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
