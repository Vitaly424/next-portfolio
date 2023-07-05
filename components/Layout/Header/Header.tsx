import styles from '../../../styles/header.module.scss';
import stylesNavList from '../../../styles/navlist.module.scss';
import Logo from "@/components/Logo/Logo";
import { Link } from "react-scroll";
import { useMediaQuery } from "@/hooks";
import { useState } from "react";
import { classNames } from "@/utils/classNames";
import stylesMenu from '../../../styles/mobileMenu.module.scss';

const Header = () => {
    const isMobile = useMediaQuery(640);
    const [menuOpen, setMenuOpen] = useState(false);

    const spy = true;
    const smooth = true;
    const offset = 20;
    const duration = 500;

    const crrentMenuItemClass = isMobile ? stylesMenu.menu__item : stylesNavList.navlist__item

    const handleToggleMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden');
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden');
        setMenuOpen(false)
    }

    // className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    return (
        <header className={styles.header}>
            <div className={`container ${styles.header__container}`}>
                <Logo />
                {isMobile &&
                    <button
                        className={classNames(styles.burger_menu, { [styles.open]: menuOpen}, [])}
                        onClick={handleToggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>}
                <nav className={`${isMobile ? stylesMenu.menu : stylesNavList.navlist}` + `${classNames('', { [stylesMenu.open]: menuOpen}, [])}`}>
                    <ul className={`${isMobile ? styles.list_reset : stylesNavList.navlist}`}>
                        <li className={crrentMenuItemClass}>
                            <Link
                                href="/"
                                to="about"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                onClick={closeMenu}
                                className={stylesNavList.navlist__link}
                            >
                                Обо мне
                            </Link>
                        </li>

                        <li className={crrentMenuItemClass}>
                            <Link
                                href="/"
                                to="portfolio"
                                spy={spy}
                                smooth={smooth}
                                onClick={closeMenu}
                                offset={offset}
                                duration={duration}
                                className={stylesNavList.navlist__link}
                            >
                                Портфолио
                            </Link>
                        </li>

                        <li className={crrentMenuItemClass}>
                            <Link
                                href="/"
                                to="contact"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                onClick={closeMenu}
                                duration={duration}
                                className={stylesNavList.navlist__link}
                            >
                                Обратная связь
                            </Link>
                        </li>

                        <li className={crrentMenuItemClass}>
                            <Link
                                href="/"
                                to="skills"
                                spy={spy}
                                smooth={smooth}
                                offset={offset}
                                duration={duration}
                                className={stylesNavList.navlist__link}
                            >
                                Навыки
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}



export default Header;
