import React, {useState} from "react";
import { Rating } from '@material-ui/lab';
import { Box } from '@material-ui/core';



const StarRating = (props) => {
let {rating} = props;


// const {isHover, isHovering} = useState(false);


    return(
        <Box component="fieldset" mb={3} borderColor="transparent">
            {   (!(rating === 0) || rating === null || rating === undefined) ?
                <Rating
                name="customized-10"
                defaultValue={rating}
                max={10}
                precision={0.1}
                className={`rating-stars`}
                readOnly={true}
                />
                : <div>This movie don`t have votes</div>
            }
        </Box>
    )
};

export default StarRating;