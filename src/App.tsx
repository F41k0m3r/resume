import './App.scss'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ScrollBar from './components/ScrollBar/ScrollBar';

function App() {

  return (
    <div className={'app'}>
      <ScrollBar setHeight={'auto'}>
          <Header/>
          <Home/>
      </ScrollBar>
    </div>
  )
}

export default App
