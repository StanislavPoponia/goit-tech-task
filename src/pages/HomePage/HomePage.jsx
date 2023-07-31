import { Container, Tweets, StyledName } from './HomePage.styled';

function HomePage() {
  return (
    <Container>
      <StyledName>Task Go IT</StyledName>
      <Tweets to="/tweets">Tweets</Tweets>
    </Container>
  );
}

export default HomePage;