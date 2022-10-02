import "./App.css"
import Pages from "./components/pages/Pages"
import LoginProvider from './components/context/context'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <LoginProvider>
        <Pages />
    </LoginProvider>


  )
}

export default App
