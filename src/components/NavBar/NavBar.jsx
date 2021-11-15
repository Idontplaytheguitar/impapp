import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { FormGenre } from "../FormGenre/FormGenre";
import { FormSortAlf } from "../FormSortAlf/FormSortAlf";
import './NavBar.css'

export function NavBar() {

    const isHome = window.location.pathname === '/';
    const { isAuthenticated, logout } = useAuth0();

    return (
        <div className='NavBarC'>
            <NavLink to='/'> <img alt='Logo' src='http://cdn23.us1.fansshare.com/photos/rockband/kinda-rock-bands-logos-collage-by-superbrogio-caz-wallpaper-104606294.jpg' /> </NavLink>
            <div className='container' > {isAuthenticated ? <button onClick={() => logout()}>Log Out</button> : null}
                {isHome ? <div className='NavBarC-FormS'>
                    <div className='NavBarC-Form'>
                        {/* [U+200F] adds a blank space */}
                        <span> Genre: ‏</span>
                        <FormGenre />
                    </div>
                    <div className='NavBarC-Form'>
                        <span> Order: ‏</span>
                        <FormSortAlf />
                    </div>
                </div> : null}
            </div>
        </div>
    );
}

