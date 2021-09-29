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

const App = () => {
    const [isLogged, setIsLogged] = useState(false);

    const handleLogout = () => {
        setIsLogged(false);
    };

    return (
        <>
            <Header isLogged={isLogged} onClick={handleLogout} />

            <Router>
                <Switch>
                    {/* <ProtectedRoute
                        isLogged={isLogged}
                        exact
                        path="/transportes"
                        component={</>}
                    /> */}

                    <CommonRoute
                        exact
                        path="/"
                        component={<LoginForm />}
                    />

                    <CommonRoute path="*" component={<h1>Not found</h1>} />
                </Switch>
            </Router>
        </>
    );
};

export default App;
