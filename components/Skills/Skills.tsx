import styles from '../../styles/skills.module.scss';
import MainTitle from '../MainTitle/MainTitle';
import SkillsItem from './SkillsItem';

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <MainTitle text='навыки' />

                <div>
                    <div>
                        <h3>Профессиональные навыки</h3>
                        <ul className={styles.skills__listtwo}>
                            <li>
                                Frontend и верстка. Html/Scss/Бэм, Vue.js/Vuex/Vue-router, React/Redux-toolkit/React Router.
                            </li>
                            <li>
                                JavaScript (ES5, ES6), TypeScript, jQuery, REST API, axios.
                            </li>
                            <li>
                                Шаблонизаторы: pug, twig, handlebars.
                            </li>
                            <li>
                                Понимание архитектуры FSD, понимание MVC.
                            </li>
                            <li>
                                Тестирование jest, loki.
                            </li>
                            <li>
                                Инструменты: npm, gulp, vite, npm, webpack, eslint, stylelint, storybook, Git, CI/CD, GitHub, GitLab, Bitbucket.
                            </li>
                            <li>
                                рафические редакторы: Figma, Photoshop.
                            </li>
                            <li>
                                Основы PHP, WordPress. Express.js, MongoDB, Strapi CMS. Postgresql.
                            </li>


                            {/*<SkillsItem*/}
                            {/*    title='Веб-Разработка'*/}
                            {/*    text='Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm.'*/}
                            {/*    iconClass={styles.skills__web}*/}
                            {/*/>*/}
                        </ul>
                    </div>

                    <div>
                        <h3>Повышение квалификации</h3>
                        <ul className={styles.skills__qualification}>
                            <li>
                               <h4>Курс по HTML, CSS верстке сайтов, WebCademy.ru</h4>
                               <p>АВГУСТ 2021 — Трёх месячный онлайн курс. Изученные технологии: HTML, CSS, адаптивная верстка, PixelPerfect,
                                   Bootsrtap, основы JS, jQuery, PHP.</p>

                            </li>

                            <li>
                                <h4>JavaScript разработчик, WebCademy</h4>
                                <p>АВГУСТ 2020 — Трёх месячный онлайн курс. Изученные технологии: Работа с DOM, ES5, ES6+, модули, создание SPA
                                    приложений.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;
