import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Videos from './components/Videos/Videos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/videos' element={<Videos></Videos>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
