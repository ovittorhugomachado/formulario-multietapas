import './App.css'
import { Main } from './components/main'
import { Aside } from './components/aside'
import { Items } from './components/aside/items'
import { Step2Component } from './components/step-2'

function App() {
  
  return (
    <>
      <Main>
        <Aside>
          <Items />
        </Aside>
        <Step2Component />
      </Main>

    </>
  )
}

export default App
