import React from 'react';

function Profile( props ){

    return(
        <div>
            This is the profile of {props.firstName} {props.lastName}
        </div>
    )
}

export default Profile;