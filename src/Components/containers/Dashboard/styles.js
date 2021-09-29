import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        marginBottom: theme.spacing(2)
    },
    breadcrumbs: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        cursor: "pointer",
        textTransform: "uppercase",
    },
    active: {
        color: theme.palette.primary.main,
        paddingBottom: '4px',
        borderBottom: `3px solid ${theme.palette.primary.main}`
    }
}));
