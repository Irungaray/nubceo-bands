// External modules
import { useState, useEffect } from "react";

// External components
import { Button, Typography } from "@material-ui/core";

// Internal modules
import { getGenres, getBandsByGenre } from "../../../helpers/requests";

// Internal components
import Modal from "../../molecules/Modal/Modal";
import CustomPaper from "../../containers/CustomPaper/CustomPaper";

const GenresDashboard = () => {
    const [data, setData] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState({
        genre: "",
        data: {},
    });
    const [modalOpen, setModalOpen] = useState(false);

    const errMsg = "Error al obtener los datos, por favor recargue la página.";

    const getInitialData = async () => {
        const res = await getGenres();

        if (res.status === 200) {
            setData(res.data);
        } else {
            alert(errMsg);
        }
    };

    const handleClick = async (code, name) => {
        const res = await getBandsByGenre(code);

        if (res.status === 200) {
            setSelectedGenre({
                genre: name,
                data: res.data,
            });
            setModalOpen(true);
        } else {
            alert(errMsg);
        }
    };

    useEffect(() => {
        getInitialData();
    }, []);

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedGenre({});
    };

    return (
        <>
            <CustomPaper column>
                {data.map((slug) => (
                    <Button
                        onClick={() => handleClick(slug.code, slug.name)}
                        key={slug.code}
                    >
                        <Typography key={slug.code} variant="h6">
                            {slug.name}
                        </Typography>
                    </Button>
                ))}
            </CustomPaper>

            {modalOpen && (
                <Modal
                    title={`Bandas del género ${selectedGenre.genre}`}
                    component={selectedGenre.data.map((genre) => (
                        <h4 key={genre.code}>{genre.name}</h4>
                    ))}
                    open={modalOpen}
                    handleCloseButton={handleCloseModal}
                />
            )}
        </>
    );
};

export default GenresDashboard;
