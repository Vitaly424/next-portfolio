/* eslint-disable @next/next/no-img-element */
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import styles from '../../styles/experience.module.scss';
import { useMediaQuery } from '../../hooks/index';

const About = () => {
    const isMobile1080 = useMediaQuery(1080);

    return (
        <section className={styles.experience } id='experience'>
            <div className="container">
                <MainTitle text='Опыт работы' />

                <ul className={styles.experience__list}>
                    <li className={styles.experience__item}>
                        <h3><span>“ООО «БРИЗ»” — </span> Frontend Разработчик</h3>
                        <span className={styles.experience__time}>сентябрь 2022 – текущее время</span>

                        <div className={styles.experience__info}>
                            <p>
                                Работа над двумя приложениями, это публичная часть, и админка. <br />
                                Админка и публичная часть написаны на Vue 3, composition api.
                            </p>

                            <p>
                                Выполнял CRUD операции, различные фильтрации, сортировки.
                            </p>

                            <p>
                                Работал с Echarts.js графиками.
                            </p>

                            <p>
                                Использовал UI фреймворк Element Plus.
                            </p>

                            <p>
                                На стороне сервера использовался Strapi CMS.
                            </p>

                            <p>
                                Работа с gitLub.
                            </p>

                            <p>
                                Написание нативных js скриптов.
                            </p>
                        </div>
                    </li>
                    <li className={styles.experience__item}>
                        <h3><span>“Digital-агенство F5” — </span> Frontend Разработчик</h3>
                        <span  className={styles.experience__time}>апрель 2021 – 2021 декабрь</span>

                        <div className={styles.experience__info}>
                            <p>
                                Верстка сайтов с нуля. С использованием bootstrap.
                            </p>

                            <p>
                                Написание gulp тасак.
                            </p>

                            <p>
                                Работа с чужим кодом, внесение правок.
                            </p>

                            <p>
                                Работа с git/Bitbucket.
                            </p>

                            <p>
                                Написание нативных js скриптов.
                            </p>

                            <p>
                                Взаимодействие с командой через Битрикс24.
                            </p>
                        </div>
                    </li>
                    <li className={styles.experience__item}>
                        <h3><span>“Oneway” — </span> Frontend Разработчик</h3>
                        <span  className={styles.experience__time}>сентябрь 2020 - декабрь 2020.</span>

                        <div className={styles.experience__info}>
                            <p>
                                Верстка отдельных страниц от интернет магазинов.
                            </p>
                            <p>
                                Доработка, правки на сайтах.
                            </p>

                            <p>
                                Работа с gulp.
                            </p>
                            <p>
                                Разработка сайтов на основе дизайна, pixel Perfect, mobile first.
                            </p>
                            <p>
                                Верстка сайтов на Vue.js + шаблонизаторы pug/twig.
                            </p>
                            <p>
                                Написание нативных js скриптов.
                            </p>
                            <p>
                                Написание различного функционала на Vue.js/Vuex.
                            </p>
                            <p>
                                Работа с git/GitLub.
                            </p>
                            <p>
                                Взаимодействие с командой через Битрикс24.
                            </p>
                        </div>
                    </li>
                    <li className={styles.experience__item}>
                        <h3><span>“Groot Soft”, Украина — </span> Frontend Разработчик</h3>
                        <span  className={styles.experience__time}>сентябрь 2020 - декабрь 2020.</span>

                        <div className={styles.experience__info}>
                            <p>
                                Верстка сайтов, лендингов, с использованием scss/less/gulp.
                            </p>
                            <p>
                                Доработка, правки на сайтах.
                            </p>

                            <p>
                                Написание скриптов на javaScript.
                            </p>
                            <p>
                                Работа с git/GitHub.
                            </p>
                        </div>
                    </li>
                    <li className={styles.experience__item}>
                        <h3><span>“Фриланс” — </span>Work Zilla</h3>
                        <span  className={styles.experience__time}>сентябрь 2020 - декабрь 2020.</span>

                        <div className={styles.experience__info}>
                            <p>
                                Верстка сайтов, лендингов.
                            </p>
                            <p>
                                Написание скриптов на javaScript.
                            </p>

                            <p>
                                Доработка, правка различных сайтов.
                            </p>
                            <p>
                                Выполнил 40 различных заданий по верстке.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
