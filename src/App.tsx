import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import './App.scss';

function App() {
    return (
    <div className={'app'}>
        <Navbar/>
        <Home/>
        <About/>
        <Resume/>
    </div>
  )
}

export default App
