import React from "react";
import Layout from "../Layouts/Layout";
import Top from "../component/Top";
import Proverb from "../component/Proverb";
import Fortune from "../component/Fortune";

const TopPage = () => {
    return (
        <>
            <Layout>
                <div className="grid grid-cols-2 gap-6">
                    <Top />
                    <Proverb />
                    <Fortune />
                </div>
            </Layout>{" "}
        </>
    );
};

export default TopPage;
