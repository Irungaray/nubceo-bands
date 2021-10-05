// External modules
import { useState, useEffect } from "react";

// Internal modules
import { getBandAlbums, getBands } from "../../../helpers/requests";

// Internal components
import BandCard from "../../molecules/BandCard/BandCard";
import Modal from "../../molecules/Modal/Modal";
import AlbumsCard from "../../molecules/AlbumsCard/AlbumsCard";
import CustomPaper from "../../containers/CustomPaper/CustomPaper";

const BandsDashboard = () => {
    const [data, setData] = useState([]);
    const [selectedBand, setSelectedBand] = useState({
        bandName: "",
        data: {},
    });
    const [modalOpen, setModalOpen] = useState(false);

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

    return (
        <>
            <CustomPaper>
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
            </CustomPaper>

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

export default BandsDashboard;
