import MyComponent from './components/MyComponents'
import Nested from './components/Nested'
import Slots from './components/Slots'
import Proxy from './components/Proxy'
import NumberList from './components/NumberList'
import NamesList from './components/NamesList'
import Events from './components/Events'
import Game from './components/Game'

import './App.css'

function App() {
  return (
    <>
    {/* <Nested>
      <MyComponent name='Roxy' age={10*3}/>
      <MyComponent name='Shelly' age={10*2} birthday/>
      </Nested>
  
      <Slots footer={<p>Footer</p>}>
        <MyComponent name="Holly" age="25"/>
      </Slots>
      <NumberList numbers={[1,2,3,4,6]}/>
      <NamesList people={people}/> */}

      <Game/>
    </>
  )
}

export default App
