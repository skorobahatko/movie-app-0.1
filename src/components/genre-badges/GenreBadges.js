import React, {useEffect, useState} from "react";
import {Badge} from 'reactstrap'

const GenreBadges = (props) => {
    const {genresList, id} = props;
    let {genres: {isLoading}} = genresList;
    let result = [];
    let [genreArr, changeGenreArr] = useState([]);
    const searchGenre = (genresList, id) => {
        console.log (genresList);
        if (genresList.genres.genres !== undefined) {
                const { genres } = genresList;
                for (let idElement of id) {
                    let simpleGenre = genres.find(genre => genre.id === idElement);
                    result = [...result, simpleGenre]
                    changeGenreArr(result)
                    console.log (genreArr)
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

                          <Badge color={`secondary`} key={genre.id}>{genre.name}</Badge>
                    )
            }) : <div>loading genres</div>
            }
        </div>
    )
};
export default GenreBadges;
