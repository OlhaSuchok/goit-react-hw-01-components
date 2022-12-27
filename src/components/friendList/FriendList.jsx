import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendsItem,
  FriendsImage,
  FriendsName,
  Status,
} from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id}>
          <Status online={isOnline}>{isOnline}</Status>
          <FriendsImage src={avatar} alt="User avatar" width="48" />
          <FriendsName>{name}</FriendsName>
        </FriendsItem>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
