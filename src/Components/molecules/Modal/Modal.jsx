// External modules
import PropTypes from "prop-types";

// External components
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
} from "@material-ui/core";

const Modal = (props) => {
    return (
        <Dialog open={props.open}>
            <DialogTitle>
                {props.title}

                <Button
                    onClick={props.handleCloseButton}
                    color="default"
                    autoFocus
                >
                    <Typography variant="body1">
                        X
                    </Typography>
                </Button>
            </DialogTitle>
            <DialogContent>{props.component}</DialogContent>
            <DialogActions>

            </DialogActions>
        </Dialog>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    component: PropTypes.element,
    handleCloseButton: PropTypes.func,
    open: PropTypes.bool,
};

export default Modal;
