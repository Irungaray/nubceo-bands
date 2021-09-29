// External modules
import { useState } from "react";
import clsx from "clsx";

// External components
import { Box, Container, Typography } from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";
import BandsDashboard from "../../organisms/BandsDashboard/BandsDashboard";
import AlbumsDashboard from "../../organisms/AlbumsDashboard/AlbumsDashboard";
import GenresDashboard from "../../organisms/GenresDashboard/GenresDashboard";

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
            currentDashboard = <AlbumsDashboard />;
            break;

        case breadcrumb === "genres":
            currentDashboard = <GenresDashboard />;
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
