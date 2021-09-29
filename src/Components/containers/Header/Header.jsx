// External modules
import PropTypes from "prop-types";

// External components
import { Button, Container } from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";

// Icons & Images
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

// External modules
import { Link } from "react-router-dom";

const Header = (props) => {
    const { container } = useStyles();

    return (
        <Container maxWidth="xl" className={container}>
            <Link to="/home">
                <LibraryMusicIcon />
            </Link>

            {props.isLogged && (
                <Button onClick={props.onClick}>
                    <ExitToAppIcon />
                </Button>
            )}

            {props.children}
        </Container>
    );
};

Header.propTypes = {
    onClick: PropTypes.func,
};

export default Header;
