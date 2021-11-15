import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBandList } from "../../redux/actions";
import { Band } from "../Band/Band";
import './Bands.css'

export function Bands() {

    const bands = useSelector(state => state.bandList);
    const isFiltered = useSelector(state => state.filteredBands);
    const filteredBands = useSelector(state => state.filteredBandList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBandList())
    }, []);

    return (
        <div className='bands'>
            <h1>Bands</h1>
            {

                // If the user has filtered the bands, show the filtered list. If he hasn't then show the full list.
                // If there is no list, show a message saying there is nothing to see here

                isFiltered ? filteredBands ? filteredBands.map(b => {
                    return <Band key={b.id} band={b} />
                }) : <h2>Nothing to see here</h2> :
                    bands ? bands.map(band => {
                        return (
                            <Band key={band.id} band={band} />
                        )
                    }
                    ) : <h2>Nothing to see here</h2>}
        </div>
    );
}