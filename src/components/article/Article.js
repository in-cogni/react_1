import './Article.css';

function Article(props) {
    let {title, content} = props; //Деструктуризация
    return(
        <article>
            <h1 style={{color: "darkblue", fontSize: "32px"}}>{title}</h1>
            {content}
            {/* <h2>AMD Ryzen 5 9600X — идеальный баланс для игрового ПК</h2>

            <p><em>Тесты</em> показывают, что 9600X выдает примерно на 13% большую производительность в однопоточных испытаниях по сравнению с Ryzen 5 7600X. В многопоточных задачах разница скромнее — около 7%, но всё равно ощутима. При этом TDP остался на уровне 65 Вт, что делает этот процессор одним из самых энергоэффективных в своем классе.</p>

            <p>Игровая производительность, кстати, тоже на уровне. В играх с разрешением 1080p Ryzen 5 9600X показывает результаты, сопоставимые с более дорогими моделями, включая Ryzen 7 9700X. И даже при переключении на 1440p и 4K процессор не становится бутылочным горлышком в связке с довольно мощными видеокартами. Это говорит о том, что для большинства геймеров переплачивать за старшие модели просто нет смысла.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores impedit alias quibusdam optio assumenda rerum quia nemo doloremque, iusto repudiandae molestiae suscipit ex consectetur. Non nemo cumque quam in.</p> */}
        </article>
    )
}

Article.defaultProps = {title:`I want to sleep I want to sleep I want to sleep I want to sleep Заголовок статьи`,content:`Содержимое статьи`};

export default Article;