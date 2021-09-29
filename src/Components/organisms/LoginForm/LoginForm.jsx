// External modules
import { useState } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

// External components
import { Button, Typography } from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";
import { login } from "../../../helpers/requests";

// Internal components
import PaperWithTitle from "../../containers/PaperWithTitle/PaperWithTitle";
import Input from "../../atoms/Input/Input";
import PswInput from "../../atoms/PswInput/PswInput";
import SwitchInput from "../../atoms/SwitchInput/SwitchInput";

const LoginForm = (props) => {
    const history = useHistory();

    const [values, setValues] = useState({
        username: "test",
        password: "test1234",
        rememberMe: false,
    });
    const [err, setErr] = useState(false);

    const { error } = useStyles();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheck = () => {
        setValues({
            ...values,
            rememberMe: !values.rememberMe,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const res = login(values.username, values.password);

        if (res.status === 200) {
            props.setIsLogged(true);
            history.push("/bands");
        } else {
            setErr(true);
        }
    };

    return (
        <PaperWithTitle isForm onSubmit={handleLogin} title="Ingresar">
            <Input
                label="Nombre de usuario"
                name="username"
                value={values.username}
                onChange={handleChange}
            />

            <PswInput
                label="Contraseña"
                name="password"
                value={values.password}
                onChange={handleChange}
            />

            <SwitchInput
                checked={values.rememberMe}
                onChange={handleCheck}
                name="rememberMe"
                label="Recuérdame"
            />

            <Button variant="contained" color="primary" type="submit">
                Ingresar
            </Button>

            {err && (
                <Typography variant="body2" color="error" className={error}>
                    Error al iniciar sesión.
                </Typography>
            )}
        </PaperWithTitle>
    );
};

LoginForm.propTypes = {
    setIsLogged: PropTypes.func,
};

export default LoginForm;
