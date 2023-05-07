//components
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/Header';
import './components/Footer';

//pages
import AboutMe from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const [view, setView] = useState{}
   const renderView = () => {

   }
}

export default App;