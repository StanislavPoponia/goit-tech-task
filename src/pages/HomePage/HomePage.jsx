import { Container, Tweets, StyledName } from './HomePage.styled';

function HomePage() {
  return (
    <Container>
      <Tweets to="/tweets">Tweets</Tweets>
      <StyledName>Welcome to GoIT test</StyledName>
    </Container>
  );
}

export default HomePage;