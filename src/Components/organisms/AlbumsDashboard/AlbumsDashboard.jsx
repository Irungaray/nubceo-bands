// External modules
import { useState, useEffect } from "react";

// External components
import { ListItemText } from "@material-ui/core";

// Internal components
import CustomPaper from "../../containers/CustomPaper/CustomPaper";

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
        <CustomPaper column>
            {data.map((album, index) => (
                <ListItemText key={index}>
                    {album.name} - {album.year}
                </ListItemText>
            ))}
        </CustomPaper>
    );
};

export default AlbumsDashboard;
