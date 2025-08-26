import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Article from './article/Article.js';
import Nav from './nav/Nav.js';
import data from './db.json';

function App(props){
    let db = data.people;
    return (
        <div className="App">
            <Header/>
            <Nav navigation={props.navigation}/>
            <Article db = {db}/>

            <div>
                {/* <Article/>
                { <Article title="AMD Ryzen 5 9600X — идеальный баланс для игрового ПК" content="Игровая производительность, кстати, тоже на уровне. В играх с разрешением 1080p Ryzen 5 9600X показывает результаты, сопоставимые с более дорогими моделями, включая Ryzen 7 9700X. И даже при переключении на 1440p и 4K процессор не становится бутылочным горлышком в связке с довольно мощными видеокартами. Это говорит о том, что для большинства геймеров переплачивать за старшие модели просто нет смысла." /> }  */}
            </div>
            <Footer />
        </div>
    );
}
export default App;
