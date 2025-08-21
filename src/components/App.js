import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Article from './article/Article.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
