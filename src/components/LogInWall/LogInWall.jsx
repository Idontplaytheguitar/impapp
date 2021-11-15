import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './LogInWall.css'

export function LogInWall() {

    const { loginWithRedirect } = useAuth0();
    return (
        <div className="Home">
            <h1 className='logIn' style={{ cursor: "pointer" }} onClick={() => loginWithRedirect()}>Log In to see the content</h1>
        </div>
    );
}