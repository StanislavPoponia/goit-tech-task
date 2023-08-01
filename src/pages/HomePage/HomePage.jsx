import { Container, Tweets, StyledName } from './HomePage.styled';

function HomePage() {
  return (
    <Container>
      <Tweets to="/tweets">Tweets</Tweets>
      <StyledName>Task Go IT</StyledName>
    </Container>
  );
}

export default HomePage;