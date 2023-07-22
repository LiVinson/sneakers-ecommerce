import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import GlobalStyle from './global-design/GlobalStyle';
import MainWrapper from './components/MainWrapper/MainWrapper'
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {

  return (
    <>
    <GlobalStyle />
    <Container>
      <Navbar />
      <MainWrapper>
        <ItemDetail />
      </MainWrapper>
    </Container>
    </>
  )
}

export default App
