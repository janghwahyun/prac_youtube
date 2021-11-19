import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = props => {
  return (
    <header className={styles.SearchHeader}>
      <img src="/images/youtube.png" alt="logo" />
      <h1>YouTube</h1>
      <input type="search" src="/images/search.png"></input>
    </header>
  );
};

export default SearchHeader;
