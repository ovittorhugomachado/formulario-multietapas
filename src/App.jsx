import './App.css'
import { Main } from './components/main'
import { Aside } from './components/aside'
import { Items } from './components/aside/items'
import { Step5Component } from './components/step-5'

function App() {
  
  return (
    <>
      <Main>
        <Aside>
          <Items />
        </Aside>
        <Step5Component />
      </Main>

    </>
  )
}

export default App
