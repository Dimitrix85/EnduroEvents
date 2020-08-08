import React from 'react';
import styles from './App.module.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App(props) {
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

export default App;
