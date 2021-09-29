// External modules
import PropTypes from "prop-types";

// External components
import {
    CardActionArea,
    CardContent,
    Typography,
    Card,
    Box,
} from "@material-ui/core";

const BandCard = (props) => {
    return (
        <Card
            style={{ backgroundColor: "white", width: "350px", margin: "16px" }}
            onClick={props.onClick}
        >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {props.name} - {props.year}
                    </Typography>

                    <Typography gutterBottom variant="body1">
                        {props.country}
                    </Typography>

                    <hr />

                    <Box display="flex" flexDirection="row" flexWrap="wrap">
                        <Typography variant="body2">
                            Miembros:
                        </Typography>

                        {props.members.map((member, index) => (
                            <Typography variant="body2" key={index}>
                                {" "}{member.name}{", "}
                            </Typography>
                        ))}
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

BandCard.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    year: PropTypes.number,
    country: PropTypes.string,
    members: PropTypes.array,
};

export default BandCard;
