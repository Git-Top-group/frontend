import "./App.css"
import Pages from "./components/pages/Pages"
import LoginProvider from './components/context/context'
  
function App() {
  return(

  <LoginProvider>

    <Pages />
  </LoginProvider>


  )
}

export default App
