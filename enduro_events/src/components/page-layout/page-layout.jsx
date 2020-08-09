import React from 'react';
import styles from './page-layout.module.css';
import Header from '../header/header'
import Footer from '../footer/footer'
import Aside from '../aside/aside'

function PageLayout(props) {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Aside />
        <main className={styles.main}>
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
