import React from 'react';
import styles from './Header.module.scss';
import { Container } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  const userData = false;

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.body}>
          <Link href="/">
            <a className={styles.logo}>
              OZON
            </a>
          </Link>
          <ul className={styles.menu}>
            <li>
              <Link href="#">
                <a>Главная</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>О нас</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Контакты</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.actions}>
            {userData ? (
              <>
                <li>
                  <Link href="#">
                    <a>Профиль</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Выйти</a>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="#">
                    <a>Войти</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Зарегистрироваться</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
