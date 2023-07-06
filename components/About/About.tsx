/* eslint-disable @next/next/no-img-element */
import ArrowSvg from '../ArrowSvg/ArrowSvg';
import MainTitle from '../MainTitle/MainTitle';
import styles from '../../styles/about.module.scss';
import { useMediaQuery } from '../../hooks/index';

const About = () => {
    const isMobile1080 = useMediaQuery(1080);

    return (
        <section className={styles.about } id='about'>
            <div className="container">
                <MainTitle text='обо мне' />
            </div>
            <div className={`sub-container ${styles.about__sub_container}`}>
                <img className={styles.about__img} src="/img/about.png" alt="avatar" />
                <div className={styles.about__inner}>
                    <h3 className={styles.about__title}>
                        Виталий Баев, 24 года
                        <span className={styles.about__title__border}>
                            <span className={styles.about__title__border__arrow}>
                                <ArrowSvg />
                            </span>
                            <span className={styles.about__title__border__line} />
                        </span>
                    </h3>
                    <div className={styles.about__text}>
                        <p>
                            Занимаюсь веб разработкой с 2020 года. Сначала отучился на кинолога, получил среднее профессиональное образование. Но всё таки не стал работать по специальности. Решил попробовать программирование, и мне понравилось, я принял решение полностью уйти в эту сферу. Поступил в Северный (Арктический) федеральный университет, на информационные системы и технологии, на заочную форму обучения, и уже на первых курсах начал искать работу связанную с веб разработкой. На сегодняшний день смог добиться определенных результатов, хочу и дальше развиваться в этой области, добиваться новых достижений и продолжать свой профессиональный путь.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
