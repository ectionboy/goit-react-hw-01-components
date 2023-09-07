import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem"
import { FriendListItemGen } from './FriendList.styled';

export const FriendList = ({friends}) =>{
    return( 
        <FriendListItemGen>
            {friends.map(friendsItems => {
                return(
                
                    <FriendListItem
                        avatar={friendsItems.avatar}
                        name={friendsItems.name}
                        isOnline={friendsItems.isOnline}
                        key={friendsItems.id}
                    />
                
    )
    })}
        </FriendListItemGen>
    )
    
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};