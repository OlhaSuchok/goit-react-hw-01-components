import PropTypes from 'prop-types';
import {
  UserImage,
  UserInfo,
  UserInfoName,
  UserDescriptionWrapper,
  UserWrapper,
  StatsList,
  StatsItem,
  StatsName,
  StatsInfo,
} from './Profile.styled';

export default function Profile({
  usersname,
  tag,
  location,
  avatar,
  likes,
  followers,
  views,
}) {
  return (
    <UserWrapper>
      <UserDescriptionWrapper>
        <UserImage src={avatar} alt="User avatar" className="avatar" />
        <UserInfoName>{usersname}</UserInfoName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserDescriptionWrapper>

      <StatsList>
        <StatsItem>
          <StatsName>Followers</StatsName>
          <StatsInfo>{followers}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsName>Views</StatsName>
          <StatsInfo>{views}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <StatsName>Likes</StatsName>
          <StatsInfo>{likes}</StatsInfo>
        </StatsItem>
      </StatsList>
    </UserWrapper>
  );
}

Profile.propTypes = {
  usersname: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
