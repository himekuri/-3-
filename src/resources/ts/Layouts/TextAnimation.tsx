import React, { ReactElement, useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
    children: React.ReactNode;
    section: string;
};

const TextAnimation = (props: Props): ReactElement => {
    const textRef = useCallback(node => {
        if (node !== null) {
            const text = node.innerHTML; //テキストを読み込む
            const height = node.clientHeight; //高さを取得する
            node.innerHTML = ""; //テキストを削除する
            node.style.height = height + "px"; //高さを設定する
            setAnimation(text);
        }
    }, []);

    const setAnimation = (text :any) => {
        const numText = text.length;
        const selector = "#" + props.section;

        gsap.registerPlugin(TextPlugin);
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(`${selector} .animation-text`, {
            duration: numText * 0.07,
            text: {
                value: text
            },
            ease: "none",
            scrollTrigger: {
                trigger: selector,
                start: "top 80%",
                end: "bottom 80%"
            }
        });
    };

    return (
        <p ref={textRef} className="animation-text">
            {props.children}
        </p>
    );
};

export default TextAnimation;
