import styles from './index.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div class="icon-container">
                <div id="menuicon">
                    <div class="bar bar1"></div>
                    <div class="bar bar2"></div>
                </div>
            </div>
            <div class="mobile-menu">
                <ul class="menu">
                    <li class="menu-item">
                        <a href="#">Mac</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">iPad</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">iPhone</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">Watch</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">TV</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">Music</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">Support</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
