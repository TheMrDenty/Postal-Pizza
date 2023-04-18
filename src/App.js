
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';




function App() {
  
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
