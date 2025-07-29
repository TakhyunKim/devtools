import ReactDOM from 'react-dom/client'
import Devtools from './setup'

function App() {
  return (
    <div>
      <h1>TanStack Devtools Basic Example</h1>
      <Devtools />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)
