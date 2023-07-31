import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  margin: 0 20px;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const Back = styled(NavLink)`
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  padding: 15px 60px;
  width: 70px;
  height: 50px;
  color: #ebd8ff;
  background: #5736a3;
  border-radius: 12px;

  &:hover,
  &:focus {
    background: #5CD3A8;
  }
`;