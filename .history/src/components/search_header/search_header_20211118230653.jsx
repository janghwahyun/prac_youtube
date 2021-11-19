import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = props => {
  return (
    <header className={styles.header}>
      <img className={styles.img} src="/images/youtube.png" alt="logo" />
      <h1 className={styles.title}>YouTube</h1>
      <input className={styles.input} type="search" src="/images/search.png"></input>
    <button className={styles.button} type="sumit">
        <img src="/images/search.png" alt="search">
    </button>
    </header>
  );
};

export default SearchHeader;
