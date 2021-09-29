// External modules
import { useState, useEffect } from "react";

// External components
import { Container, Paper, Typography } from "@material-ui/core";

// Internal modules
import { getGenres, getBandsByGenre } from "../../../helpers/requests";

// Internal components
import Modal from "../../molecules/Modal/Modal";

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

    console.log(selectedGenre);

    useEffect(() => {
        getInitialData();
    }, []);

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedGenre({});
    };

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
                    {data.map((slug) => (
                        <Typography
                            variant="h6"
                            key={slug.code}
                            onClick={() => handleClick(slug.code, slug.name)}
                        >
                            {slug.name}
                        </Typography>
                    ))}
                </Paper>
            </Container>

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
