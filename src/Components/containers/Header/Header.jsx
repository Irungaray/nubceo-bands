// External modules
import PropTypes from "prop-types";

// External components
import { Button, Container } from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";

// Icons & Images
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Header = (props) => {
    const { container } = useStyles();

    return (
        <Container maxWidth="xl" className={container}>
            <LibraryMusicIcon />

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
