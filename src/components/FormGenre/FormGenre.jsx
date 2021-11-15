import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBandOff, filterGenre, getGenres } from "../../redux/actions";

export function FormGenre() {

    const [genre, setGenre] = useState('');
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(getGenres());
    }, []);

    function handleChange(e) {
        const { value } = e.target;
        setGenre(value);
        if (value === 'all') dispatch(filterBandOff());
        else {
            dispatch(filterGenre(value));
        }
    }

    return (
        <form >
            <select className='formStyle' value={genre} onChange={handleChange}>
                <option value="all">All genres</option>
                {genres.map(genre => (
                    <option key={genre.code} value={genre.code}>{genre.name}</option>
                ))}
            </select>
        </form>
    );
}