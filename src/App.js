
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Resumes from './components/Resumes';
import Edit from './components/Edit';
import Resume from './components/Resume';
import Create from './components/Create';
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
        <Route path='/' element={< Resumes />}/>
        <Route path='/:id' element={< Resume />}/>
        <Route path='/:id/edit' element={< Edit />}/>
        <Route path='/create' element={< Create />}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
