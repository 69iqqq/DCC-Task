// import "./App.css"
// import { Routes, Route } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
// import Home from "./pages/Home"
// import Page from "./pages/Page"
// import Footer from "./components/Footer"
// // import Header from "./components/Header"
// function App() {
//   return (
//     <div>
//       <div className="App" >
//         {/* <Header /> */}
//         <Routes>
//           {<Route path="/" element={<Home/>}/>}
//           <Route path="/edit" element={<Page/>}/>
//         </Routes>
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Page from "./pages/Page";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2"; // Import Footer2 component
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check the screen size on initial render

    window.addEventListener("resize", handleResize); // Add resize event listener
    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className='App'>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Page />} />
        </Routes>
        {isMobile ? <Footer2 /> : <Footer />}{" "}
        {/* Conditionally render Footer or Footer2 */}
      </div>
    </div>
  );
}

export default App;
