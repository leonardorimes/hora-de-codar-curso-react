
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import Navbar from './components/Navbar'


// pages
import About from './pages/About'
import Products from './pages/Products'
import Home from './pages/Home'


import "./App.css"

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
