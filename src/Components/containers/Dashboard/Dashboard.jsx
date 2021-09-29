// External modules
import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

// External components
import { Box, Container, Typography } from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";
import BandsDashboard from "../../organisms/BandsDashboard/BandsDashboard";

const crumbs = [
    {
        key: "bands",
        label: "Bandas",
    },
    {
        key: "albums",
        label: "Albums",
    },
    {
        key: "genres",
        label: "Géneros",
    },
];

const Dashboard = (props) => {
    const [breadcrumb, setBreadcrumb] = useState("bands");

    const { container, active, breadcrumbs } = useStyles();

    let currentDashboard = <></>;

    switch (true) {
        case breadcrumb === "bands":
            currentDashboard = <BandsDashboard />;
            break;

        case breadcrumb === "albums":
            currentDashboard = <h1>albums</h1>;
            break;

        case breadcrumb === "genres":
            currentDashboard = <h1>generos</h1>;
            break;

        default:
            currentDashboard = <BandsDashboard />;
            break;
    }

    return (
        <>
            <Container>
                <Box className={container}>
                    {crumbs.map((crumb, index) => (
                        <Typography
                            key={index}
                            className={
                                breadcrumb === crumb.key
                                    ? clsx(active, breadcrumbs)
                                    : breadcrumbs
                            }
                            variant="h5"
                            onClick={() => setBreadcrumb(crumb.key)}
                        >
                            {crumb.label}
                        </Typography>
                    ))}
                </Box>

                {currentDashboard}
            </Container>
        </>
    );
};

Dashboard.propTypes = {};

export default Dashboard;
