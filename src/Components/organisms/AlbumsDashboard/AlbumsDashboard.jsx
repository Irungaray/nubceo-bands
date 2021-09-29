// External modules
import { useState, useEffect } from "react";

// External components
import { Container, ListItemText, Paper } from "@material-ui/core";

// Internal modules
import { getAlbums } from "../../../helpers/requests";

const AlbumsDashboard = () => {
    const [data, setData] = useState([]);

    const errMsg = "Error al obtener los datos, por favor recargue la página.";

    const getInitialData = async () => {
        const res = await getAlbums();

        if (res.status === 200) {
            setData(res.data);
        } else {
            alert(errMsg);
        }
    };

    useEffect(() => {
        getInitialData();
    }, []);

    return (
        <>
            <Container>
                <Paper
                    elevation={5}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {data.map((album, index) => (
                        <ListItemText key={index}>
                            {album.name} - {album.year}
                        </ListItemText>
                    ))}
                </Paper>
            </Container>
        </>
    );
};

AlbumsDashboard.propTypes = {};

export default AlbumsDashboard;
