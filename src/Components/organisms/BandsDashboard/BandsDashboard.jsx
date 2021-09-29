// External modules
import { useState, useEffect } from "react";

// External components
import { Container, Paper } from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";
import { getBandAlbums, getBands } from "../../../helpers/requests";

// Internal components
import BandCard from "../../molecules/BandCard/BandCard";
import Modal from "../../molecules/Modal/Modal";
import AlbumsCard from "../../molecules/AlbumsCard/AlbumsCard";

const BandsDashboard = (props) => {
    const [data, setData] = useState([]);
    const [selectedBand, setSelectedBand] = useState({
        bandName: "",
        data: {},
    });
    const [modalOpen, setModalOpen] = useState(false);

    const { container, paper } = useStyles();
    const errMsg = "Error al obtener los datos, por favor recargue la página.";

    const getInitialData = async () => {
        const res = await getBands();

        if (res.status === 200) {
            setData(res.data);
        } else {
            alert(errMsg);
        }
    };

    const handleCardClick = async (id, name) => {
        const res = await getBandAlbums(id);

        if (res.status === 200) {
            setSelectedBand({
                bandName: name,
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
        setSelectedBand({});
    };

    console.log(selectedBand);

    return (
        <>
            <Container className={container}>
                <Paper elevation={5} className={paper}>
                    {data.map((slug) => (
                        <BandCard
                            key={slug.id}
                            name={slug.name}
                            year={slug.year}
                            country={slug.country}
                            members={slug.members}
                            onClick={() => handleCardClick(slug.id, slug.name)}
                        />
                    ))}
                </Paper>
            </Container>

            {modalOpen && (
                <Modal
                    title={`${selectedBand.bandName} - Albums`}
                    component={<AlbumsCard data={selectedBand.data} />}
                    open={modalOpen}
                    handleCloseButton={handleCloseModal}
                />
            )}
        </>
    );
};

BandsDashboard.propTypes = {};

export default BandsDashboard;
