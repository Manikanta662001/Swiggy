import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './Components/Home';
import Restaurents from './Components/Restaurents';
import Details from './Components/Details'
import Cart from './Components/Cart';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
            <Route path='restaurents' element={<Restaurents />} />
            <Route path='details' element={<Details />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
