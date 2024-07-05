import "./App.css"
import { Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import Page from "./pages/Page"
import Footer from "./components/Footer"
import Header from "./components/Header"
function App() {
  return (
    <div>
      <div className="App" >
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/edit" element={<Page/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App

