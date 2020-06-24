import React, {useState} from "react";
import { Rating } from '@material-ui/lab';
import { Box } from '@material-ui/core';



const StarRating = (props) => {
const {rating} = props;
const {isHover, isHovering} = useState(false);


    return(
        <Box component="fieldset" mb={3} borderColor="transparent">

            <Rating
                name="customized-10"
                defaultValue={rating}
                max={10}
                precision={0.1}
                className={`rating-stars`}
                readOnly={true}
            />
        </Box>
    )
};

export default StarRating;