// External modules
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// External components
import {  } from "@material-ui/core";

// Internal modules
import { useStyles } from "./styles";

// Internal components
import PaperWithTitle from "../../containers/PaperWithTitle/PaperWithTitle";
import { getBands } from "../../../helpers/requests";

const BandsDashboard = (props) => {
    const getInitialData = async () => {
        const res = await getBands();

        if (res.status === 200) {
            console.log(res.data);
        } else {
            alert("Error al obtener los datos, por favor recargue la página.");
        }
    }

    useEffect(() => {
        getInitialData()
    })

    return (
        <PaperWithTitle title="Bands dashboard">
            <h1>Bands dashboard</h1>
        </PaperWithTitle>
    );
};

BandsDashboard.propTypes = {};

export default BandsDashboard;
