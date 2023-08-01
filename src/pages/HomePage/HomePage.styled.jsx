import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 28px 20px;
`;

export const StyledName = styled.p`
  font-size: 20px;
`;

export const Tweets = styled(NavLink)`
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