import Tweets from '../../components/CardList/CardList';
import Filter from '../../components/Select/Select';
import { Back } from './TweetsPage.styled';
import { Div } from './TweetsPage.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../redux/users/users-operation';

function TweetsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Div>
      <Back to="/">Back</Back>
      <Filter />
      <Tweets />
    </Div>
  );
}

export default TweetsPage;