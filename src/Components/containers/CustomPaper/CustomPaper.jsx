// External components
import { Container, Paper } from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";

// External modules
import PropTypes from "prop-types";

const CustomPaper = (props) => {
    const { row, column, container } = useStyles();

    return (
        <Container className={container}>
            <Paper elevation={5} className={props.column ? column : row}>
                {props.children}
            </Paper>
        </Container>
    );
};

CustomPaper.propTypes = {
    children: PropTypes.any,
};

export default CustomPaper;
