import "./App.css"
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Page from "./pages/Page"

function App() {
  return (
    <div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/edit" element={<Page/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

