// External modules
import PropTypes from "prop-types";

// External components
import {
    CardActionArea,
    CardContent,
    Card,
    ListItemText,
} from "@material-ui/core";

const AlbumsCard = (props) => {
    return (
        <Card
            style={{ backgroundColor: "white", width: "450px", margin: "16px" }}
        >
            <CardActionArea>
                <CardContent>
                    {props.data.map((album, index) => (
                        <ListItemText key={index}>
                            {album.name} - {album.year}
                        </ListItemText>
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

AlbumsCard.propTypes = {
    data: PropTypes.object,
};

export default AlbumsCard;
