// External modules
import PropTypes from "prop-types";

// External components
import {
    CardActionArea,
    CardContent,
    Card,
    ListItemText,
    Typography,
} from "@material-ui/core";

const AlbumsCard = ({ data }) => {
    return (
        <Card
            style={{ backgroundColor: "white", width: "450px", margin: "16px" }}
        >
            <CardActionArea>
                <CardContent>
                    {data.length > 1 ? (
                        data.map((album, index) => (
                            <ListItemText key={index}>
                                {album.name} - {album.year}
                            </ListItemText>
                        ))
                    ) : (
                        <Typography variant="body1">
                            No hay albumes de esta banda.
                        </Typography>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

AlbumsCard.propTypes = {
    data: PropTypes.object,
};

export default AlbumsCard;
