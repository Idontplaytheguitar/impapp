import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BandDetails } from "../../components/BandDetails/BandDetails";
import { LogInWall } from "../../components/LogInWall/LogInWall";
import { NavBar } from "../../components/NavBar/NavBar";

export function Details() {
    const { isAuthenticated } = useAuth0();

    if (isAuthenticated === true) {
        return (
            <div className="Home">
                <NavBar />
                <BandDetails />
            </div>
        );
    }
    else {
        return <LogInWall />;
    }
}