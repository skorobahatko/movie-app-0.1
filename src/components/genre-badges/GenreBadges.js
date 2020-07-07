import React from "react";
import {Badge} from 'reactstrap'

const GenreBadges = (props) => {
    const {genresList, id} = props;
    let {genres: {isLoading}} = genresList;
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
    searchGenre (genresList, id);
    return (
        <div className='card-genres'>
            {
                !isLoading ?
                genreArray.map(genre => {
                    return (

                          <Badge color={`secondary`} key={genre.id}>{genre.name}</Badge>
                    )
            }) : <div>loading genres</div>
            }
        </div>
    )
};
export default GenreBadges;
