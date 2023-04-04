import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WebR } from '@r-wasm/webr';
import Mean from './Mean'
const webR = new WebR();

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Mean webR={webR} numbers="1,2,3" />
      <Mean webR={webR} numbers="4,5,6" />
    </div>
  )
}

export default App
