import React from "react";

interface Props {
    text: string;
    img: string;
}

const Card = (props: Props) => {
    const { text, img } = props;
    return (
        <>
            <div>
                <div className="bg-yellow-100 rounded-md">
                    <div className="w-4/12 m-auto pt-3">
                        <img src={img} alt="" />
                    </div>
                    <p className="text-center text-gray-800 py-3">{text}</p>
                </div>
            </div>
        </>
    );
};

export default Card;
