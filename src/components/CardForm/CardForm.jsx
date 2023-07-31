import Picture from '../../assets/back.png';
import Logo from '../../assets/logo.png';
import { useDispatch } from 'react-redux';
import { followUser, getUsers } from '../../redux/users/users-operation';
import PropTypes from 'prop-types';
import {
  Card,
  Avatar,
  AvatarWrapper,
  Button,
  Line,
  LogoStyled,
  PictureStyled,
  Text,
  TextWrapper,
} from './CardForm.styled';

function Tweet({ user }) {
  const dispatch = useDispatch();
  return (
    <Card>
      <LogoStyled src={Logo}/>
      <PictureStyled src={Picture} />
      <Line />
      <AvatarWrapper>
        <Avatar src={user.avatar} />
      </AvatarWrapper>
      <TextWrapper>
        <Text>{user.tweets} TWEETS</Text>
        <Text>{user.followers} FOLLOWERS</Text>
      </TextWrapper>
      <Button
        onClick={() => {
          dispatch(followUser(user))
            .unwrap()
            .then(() => {
              dispatch(getUsers());
            });
        }}
        following={user.following}
        type="button"
      >
        {user.following ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Card>
  );
}

Tweet.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.bool.isRequired,
    tweets: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
  }),
};

export default Tweet;