import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return <ul class="friend-list"></ul>;
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
