import { NavigationBar } from './NavigationBar'
import styled from 'styled-components'

const App = () => {
  return (
    <>
      <Wrapper>
        <NavigationBar />
      </Wrapper>
    </>
  )
}

export default App

const Wrapper = styled.div`
  margin: 0 80px;
`
