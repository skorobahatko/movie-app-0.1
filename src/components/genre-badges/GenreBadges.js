import React from "react";
import {Badge} from 'reactstrap'

const GenreBadges = (props) => {
    const {genresList, id} = props;
    let genreArray = [];
    const searchGenre = (genresList, id) => {
        if (!(genresList.genres.genres === undefined)) {
            const { genres: { genres } } = genresList;

            for (let idElement of id) {
                let simpleGenre = genres.find(genre => genre.id === idElement);
                genreArray.push(simpleGenre);
            }
            console.log (genreArray)

        }
    };
    searchGenre(genresList, id);





    return (
        <div className='card-genre'>
            {
                genreArray.map(genre => {
                    return (
                <h5><Badge color={`secondary`}>{genre.name}</Badge></h5> )
            })
            }
        </div>
    )
};
export default GenreBadges;