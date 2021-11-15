import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBand, getBandAlbums } from "../../redux/actions";
import { useParams } from "react-router";
import './BandDetails.css'

export function BandDetails() {

    const band = useSelector(state => state.band);
    const albums = useSelector(state => state.bandAlbums);
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(useParams());
    useEffect(() => {
        dispatch(getBand(id));
        dispatch(getBandAlbums(band.id));
    }, []);

    return (
        <div className="detailss">
            <div className="details">
                <h2>Band: {band.name}</h2>
                <h2>Genre: {band.genreCode}</h2>
                <h2>Year: {band.year}</h2>
                <h2>Country: {band.country}</h2>
            </div>
            <div className='details'>
                <h2>Members: </h2>
                {band?.members?.map(member => <h3 className='album' key={member.name}>{member.name}</h3>)}
            </div>
            <div className='details'>
                <h2>Albums: </h2>
                {albums?.map(album => {
                    return (
                        <div className='album'>
                            <h3 key={album.name}>{album.name}</h3>
                            <h3>From {album.year}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}