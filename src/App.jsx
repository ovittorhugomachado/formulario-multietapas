import './App.css'
import { Main } from './components/main'
import { Aside } from './components/aside'
import { Items } from './components/aside/items'
import { ContainerStep2Component } from './components/step-2'
import { GlobalStyle } from './style/global-style'

function App() {
  
  return (
    <>
      <GlobalStyle />
      <Main>
        <Aside>
          <Items />
        </Aside>
        <ContainerStep2Component />
      </Main>

    </>
  )
}

export default App
