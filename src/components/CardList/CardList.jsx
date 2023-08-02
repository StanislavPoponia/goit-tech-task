import Tweet from '../CardForm/CardForm';
import {selectFilterUsers} from '../../redux/users/users-selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { StyledButton } from './CardList.styled';

function CardList() {
  const [sliceEnd, setSliceEnd] = useState(3);
  const filteredUsers = useSelector(selectFilterUsers);

  const handleLoadMoreClick = () => {
    setSliceEnd(prevSliceEnd => prevSliceEnd + 3);
  };

  return (
    <>
      <ul>
        {filteredUsers.slice(0, sliceEnd).map(user => (
          <li key={user.id}>
            <Tweet user={user} />
          </li>
        ))}
      </ul>

      {filteredUsers.length > sliceEnd && (
        <StyledButton type="button" onClick={handleLoadMoreClick}>
          Load More
        </StyledButton>
      )}
    </>
  );
}

export default CardList;
