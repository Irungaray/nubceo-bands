import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    container: {
        marginTop: theme.spacing(2),
    },
}));
