import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <article>
        <h2>AMD Ryzen 5 9600X — идеальный баланс для игрового ПК</h2>

<p><em>Тесты</em> показывают, что 9600X выдает примерно на 13% большую производительность в однопоточных испытаниях по сравнению с Ryzen 5 7600X. В многопоточных задачах разница скромнее — около 7%, но всё равно ощутима. При этом TDP остался на уровне 65 Вт, что делает этот процессор одним из самых энергоэффективных в своем классе.</p>

<p>Игровая производительность, кстати, тоже на уровне. В играх с разрешением 1080p Ryzen 5 9600X показывает результаты, сопоставимые с более дорогими моделями, включая Ryzen 7 9700X. И даже при переключении на 1440p и 4K процессор не становится бутылочным горлышком в связке с довольно мощными видеокартами. Это говорит о том, что для большинства геймеров переплачивать за старшие модели просто нет смысла.</p>
      </article>
    </div>
  );
}

export default App;
