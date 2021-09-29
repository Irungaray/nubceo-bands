// External modules
import { Route } from "react-router-dom";

const CommonRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}

            render={() => {
                return Component;
            }}
        />
    );
};

export default CommonRoute;
