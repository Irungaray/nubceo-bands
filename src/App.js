// External modules
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

// Internal components
import Header from "./Components/containers/Header/Header";
import LoginForm from "./Components/organisms/LoginForm/LoginForm";

// Internal modules
import "./styles/App.css";
import ProtectedRoute from "./helpers/ProtectedRoute";
import CommonRoute from "./helpers/CommonRoute";
import BandsDashboard from "./Components/organisms/BandsDashboard/BandsDashboard";

const App = () => {
    const [isLogged, setIsLogged] = useState(true);

    const handleLogout = () => {
        setIsLogged(false);
    };

    console.log(isLogged);

    return (
        <>
            <Header isLogged={isLogged} onClick={handleLogout} />

            <Router>
                <Switch>
                    <ProtectedRoute
                        isLogged={isLogged}
                        exact
                        path="/bands"
                        component={<BandsDashboard />}
                    />

                    <CommonRoute
                        exact
                        path="/"
                        component={<LoginForm setIsLogged={setIsLogged} />}
                    />

                    <CommonRoute path="*" component={<h1>Not found</h1>} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
