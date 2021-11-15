import React from "react";
import { Bands } from "../../components/Bands/Bands";
import { NavBar } from "../../components/NavBar/NavBar";
import './Home.css'
export function Home() {

    return (
        <div className='Home'>
            <NavBar />
            <div className='BandsC'>
                <Bands />
            </div>
        </div>
    );
}