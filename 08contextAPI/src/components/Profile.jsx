import React, {useContext} from 'react';
import UserContext from '../context/userContext';

function Profile() {

    const {user} = useContext(UserContext)

    if(!user){
        return <div className='text-white'>Please Login</div>
    }else{
        return <div className='text-white'>Welcome {user.username}</div>
    }
}

export default Profile
