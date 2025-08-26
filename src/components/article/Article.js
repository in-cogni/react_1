import './Article.css';
import male from '../img/male.png';
import female from '../img/female.png';

function Article(props) {
    //let { title = "Заголовок статьи", content = "Содержимое статьи" } = props; //Деструктуризация
    let { db } = props;
    return (
        <article>
            <div className='app'>
                {
                    Object.keys(db).map(elem => {
                        return(
                            <div className='card' key={elem}>
                                <img src={db[elem].photo} alt="Photo" />
                                <div className='name'>  {db[elem].name} {db[elem].surname}</div>
                                {/* <div className='gender'>
                                    <img src={`../img/${db[elem].pol}.png`} alt="Gender"/>
                                </div>  */}
                                <div className='gender'>
                                    <img src={db[elem].pol === 'male' ? male: female} alt="Gender"/>
                                </div> 
                                <div className="age">{db[elem].age}</div>
                            </div>
                        )
                    })
                }

                {/* <div className='card'>
                    <img src={db.photo} alt="Photo" />
                    <div className='name'>{db.name} {db.surname}</div>
                    <div className='gender'>
                        <img src={gender} alt="Gender" />
                    </div>
                    <div className='age'>{db.age}</div>
                </div> */}
            </div>


            <div>
                {/* <h1 style={{ color: "darkblue", fontSize: "32px" }}>{title}</h1>
                {content} */}

                {/* <h2>AMD Ryzen 5 9600X — идеальный баланс для игрового ПК</h2>
                <p><em>Тесты</em> показывают, что 9600X выдает примерно на 13% большую производительность в однопоточных испытаниях по сравнению с Ryzen 5 7600X. В многопоточных задачах разница скромнее — около 7%, но всё равно ощутима. При этом TDP остался на уровне 65 Вт, что делает этот процессор одним из самых энергоэффективных в своем классе.</p>
                <p>Игровая производительность, кстати, тоже на уровне. В играх с разрешением 1080p Ryzen 5 9600X показывает результаты, сопоставимые с более дорогими моделями, включая Ryzen 7 9700X. И даже при переключении на 1440p и 4K процессор не становится бутылочным горлышком в связке с довольно мощными видеокартами. Это говорит о том, что для большинства геймеров переплачивать за старшие модели просто нет смысла.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores impedit alias quibusdam optio assumenda rerum quia nemo doloremque, iusto repudiandae molestiae suscipit ex consectetur. Non nemo cumque quam in.</p> */}
            </div>
        </article>
    )
}

// Article.defaultProps = {title:`Заголовок статьи`,content:`Содержимое статьи`};

export default Article;