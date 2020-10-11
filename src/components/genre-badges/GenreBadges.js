import React, {useEffect, useState} from "react";
import {Badge} from 'reactstrap'

const GenreBadges = (props) => {
    const {genresList, id} = props;
    let {isLoading} = genresList;
    let result = [];
    let [genreArr, changeGenreArr] = useState([]);
    const searchGenre = (genresList, id) => {
        if (genresList.genres.genres !== undefined) {
            const { genres } = genresList;
            for (let idElement of id) {

                    let simpleGenre = genres.genres.find(genre => genre.id === idElement);
                console.log (simpleGenre)
                    result = [...result, simpleGenre];
                    changeGenreArr(result)
                }
            }

    };
    useEffect(() => {
        searchGenre(genresList,id);
    }, [genresList, id]);

    return (
        <div className='card-genres'>
            {
                !isLoading ?
                genreArr.map(genre => {
                    return (
                            <Badge color='secondary' key={genre.id}>{genre.name}</Badge>
                    )
            }) : null
            }
        </div>
    )
};
export default GenreBadges;
