import React from "react";
import { NavLink } from "react-router-dom";
import './Band.css'

export function Band({band}) {
    return (
        <div className="band">
            <NavLink className='bandSingular' to={`band/${band.id}`} ><h2>{band.name}</h2> </NavLink>
        </div>
    );
}