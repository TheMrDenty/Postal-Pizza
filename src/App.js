
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import Contact from './pages/Contact';




function App() {
  
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path='/subjects' element={<Subjects />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
