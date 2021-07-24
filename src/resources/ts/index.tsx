import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopPage from "./Page/TopPage";
import LogInPage from "./Page/LogInPage";
import "tailwindcss/tailwind.css";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={TopPage} />
                <Route path="/LogInPage" component={LogInPage} />
            </Switch>
        </Router>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
