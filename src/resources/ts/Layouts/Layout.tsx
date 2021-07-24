import React from "react";
import { ReactNode } from "react";
import Header from "../component/Header";
import styled from 'styled-components'

interface Props {
    children: ReactNode;
}

const BackColor = styled.div`
    background-color: #F0EDE3;
    height: 100vh;
`;

const Layout = ({ children }: Props) => {
    return (
        <BackColor>
            <Header />
            <main className="w-11/12 m-auto">
                <div className="w-11/12 m-auto">{children}</div>
            </main>
        </BackColor>
    );
};

export default Layout;