import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layouts/Layout";
import Top from "./component/Top";
import Proverb from "./component/Proverb";
import Fortune from "./component/Fortune";

const App: React.FC = () => {
    return (
        <>
            <Layout>
                <div className="grid grid-cols-2 gap-6">
                    <Top />
                    <Proverb />
                    <Fortune />
                </div>
            </Layout>
        </>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
