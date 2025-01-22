import './App.css'
import { Main } from './components/main'
import { Aside } from './components/aside'
import { Items } from './components/aside/items'
import { ContainerStep1Component } from './components/step-1'
import { GlobalStyle } from './style/global-style'

function App() {
  
  return (
    <>
      <GlobalStyle />
      <Main>
        <Aside>
          <Items />
        </Aside>
        <ContainerStep1Component />
      </Main>

    </>
  )
}

export default App
