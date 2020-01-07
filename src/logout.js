import React from 'react';

const Logout = props => {
    localStorage.clear();
    props.history.push("/");
    return(
        <>
            
        </>
    )
}

export default Logout;