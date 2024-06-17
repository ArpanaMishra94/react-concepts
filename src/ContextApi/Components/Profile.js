import React, {useContext} from 'react'; 
import { AppContext } from '../index';

const Profile = () => {
    const {user} = useContext(AppContext);

    if(!user) return <div>Please Login</div>
    else return <div>welcome {user.userName}</div>
}

export default Profile;