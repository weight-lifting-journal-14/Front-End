import React from 'react';

const Logout = props => {
    localStorage.clear();
    props.setAuthenticated(false);
    props.history.push("/");
    return(
        <></>
    )
}

export default Logout;