import { Main } from './components/main'
import { Aside } from './components/aside'
import { Items } from './components/aside/items'
import { ContainerStep5Component } from './components/step-5'
import { GlobalStyle } from './style/global-style'

function App() {
  
  return (
    <>
      <GlobalStyle />
      <Main>
        <Aside>
          <Items />
        </Aside>
        <ContainerStep5Component />
      </Main>
    </>
  )
}

export default App
