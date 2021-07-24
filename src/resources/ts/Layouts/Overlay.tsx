import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Overlay = ({ children }: Props) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
            {children}
        </div>
    );
};

export default Overlay;
