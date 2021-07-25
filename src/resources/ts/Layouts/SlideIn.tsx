import React, { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
    children: ReactNode;
}

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: translateY(64px);
}
100% {
    opacity: 1;
    transform: translateY(0);
}
`;

const SlideInPart = styled.div`
    padding: 2px;
    background-color: #F9FAFB;
    width: 75%;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

const SlideIn = ({ children }: Props) => {
    return <SlideInPart>{children}</SlideInPart>;
};

export default SlideIn;
