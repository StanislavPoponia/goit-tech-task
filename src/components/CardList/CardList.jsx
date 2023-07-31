import Tweet from '../CardForm/CardForm';
import {selectFilteredUsers} from '../../redux/users/users-selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { StyledButton } from './CardList.styled';

function Tweets() {
  const [sliceEnd, setSliceEnd] = useState(3);
  const filteredUsers = useSelector(selectFilteredUsers);
  

  return (
    <>
      <ul>
        {filteredUsers.slice(0, sliceEnd).map(user => (
          <li key={user.id}>
            <Tweet user={user} />
          </li>
        ))}
      </ul>

      {filteredUsers.length >= sliceEnd && (
        <StyledButton
          type="button"
          onClick={() => {
            setSliceEnd(sliceEnd + 3);
          }}
        >
          Load More
        </StyledButton>
      )}
    </>
  );
}

export default Tweets;