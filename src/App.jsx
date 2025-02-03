import { Main } from './components/main'
import { Aside } from './components/aside'
import { Items } from './components/aside/items'
import { GlobalStyle } from './style/global-style'

function App() {
  
  return (
    <>
    <GlobalStyle />
      <Main>
        <Aside>
          <Items />
        </Aside>
      </Main>
    </>
  )
}

export default App
