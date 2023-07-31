import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/users/users-selectors';
import { filterSelection } from '../../redux/users/users-reducer';
import Select from 'react-select';
import { Container } from './Select.styled';

const options = [
  { value: 'Show All', label: 'Show All' },
  { value: 'Follow', label: 'Follow' },
  { value: 'Following', label: 'Following' },
];

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onSelectFilter = element => dispatch(filterSelection(element.value));
  return (
    <Container>
      <label >
      </label>
      <Select
        options={options}
        defaultValue={{ value: filter, label: filter }}
        onChange={onSelectFilter}
      />
    </Container>
  );
}

export default Filter;