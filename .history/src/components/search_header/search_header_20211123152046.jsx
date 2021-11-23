import React, { useRef } from 'react';
import styles from './search_header.module.css';
//컴포넌트 안에서 버튼이 눌러 졌는지 엔터키가 쳐서 검색이 됐는지 상관없고
//검색이라는 이벤트가 발생하면 내가 전달해주는 콜백함수를 불러라고
//props으로 전달받음
const SearchHeader = ({}) => {
  //input의 입력된 값을 알아와야 하지 그러려면 useref를 이용
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/youtube.png" alt="logo" />
        <h1 className={styles.title}>YouTube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
        src="/images/search.png"
      ></input>
      <button className={styles.button} type="sumit" onClick={onClick}>
        <img
          className={styles.buttonImage}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
