import React from 'react';
import styles from './page-layout.module.css';
import Header from '../header/header'
import Footer from '../footer/footer'

function PageLayout(props) {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
