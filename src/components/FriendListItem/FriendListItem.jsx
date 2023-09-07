import PropTypes from 'prop-types';
import { Avatar, Item, Paragraph, Status } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline, id}) =>{
    return (
    <Item key={id}>
      <Status $status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar"></Avatar>
      <Paragraph>{name}</Paragraph>
    </Item>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };