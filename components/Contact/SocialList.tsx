/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/socialListContact.module.scss';

const SocialList = () => (
    <ul className={styles.social__list}>
        <li className={styles.social__list__item}>
            <a href="https://t.me/Vitaliy244" className={styles.social__list__item__link}>
                <span className={styles.social__list__item__link__text}>Мой телеграм: @Vitaliy244</span>
            </a>
        </li>

        <li className={styles.social__list__item}>
            <a href="mailto:vitalij.baev.98@bk.ru" className={styles.social__list__item__link}>
                <span className={styles.social__list__item__link__text}>Почта: vitalij.baev.98@bk.ru</span>
            </a>
        </li>
        {/*<li className={styles.social__list__item}>*/}
        {/*    <a href="components/Contact#" className={styles.social__list__item__link}>*/}
        {/*        <span className={styles.social__list__item__link__text}>ВКонтакте</span>*/}
        {/*        <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__vk}`}>*/}
        {/*            <img className={styles.social__list__item__link__img} src="/img/vk.svg" alt="ВКонтакте" />*/}
        {/*        </span>*/}
        {/*    </a>*/}
        {/*</li>*/}
        {/*<li className={styles.social__list__item}>*/}
        {/*    <a href="components/Contact#" className={styles.social__list__item__link}>*/}
        {/*        <span className={styles.social__list__item__link__text}>YouTube</span>*/}
        {/*        <span className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__yt}`}>*/}
        {/*            <img className={styles.social__list__item__link__img} src="/img/youtube.svg" alt="YouTube" />*/}
        {/*        </span>*/}
        {/*    </a>*/}
        {/*</li>*/}
    </ul>
);

export default SocialList;
