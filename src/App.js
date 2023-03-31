//components
import { useState } from 'react';
import './App.css';
import './components/Header';
import './components/Footer';


//function
function App() {
  const [view, setView] = useState('home')

  const renderView = () => {
    if (view === 'home') {
      return <Home />
    } else if (view === 'portfolio') {
      return <Portfolio />
    } else if (view === 'contact') {
      return <Contact />
    } else if (view === 'resume') {
      return <Resume />
    } else {
      return 'No matching view found'
    }
  }


  return (
  <>
    <header 
      view={view}
      setView={setView}
    />
    { renderView() }
    <footer/>

  </>
);
}


export default App;
