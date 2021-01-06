import React from 'react'

function NavBarTitle({ icon, title }) {
    return (
        <div className="navbar-title">
            <img src={icon} alt={title} />
            <h1>{title}</h1>

        </div>
    );
}

export default NavBarTitle;