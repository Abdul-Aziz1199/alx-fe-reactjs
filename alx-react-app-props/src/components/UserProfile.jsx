import { useContext } from 'react';
import UserContext from './UserContext'

function UserProfile() {
    const userData = useContext(UserContext);    //to consume context

           if(!userData){
            return <div>No user data available</div>
           }
           return(
            <div>
                <p>Name: {userData.name}</p>
                <p>Email: {userData.email}</p>
            </div>

           )
}
export default UserProfile;
