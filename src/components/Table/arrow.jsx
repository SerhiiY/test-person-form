import React from 'react'
import styles from './style.module.scss';

const Arrow = ({ sortType, sort, name }) => 
    <img src='https://icons8.com/iconizer/files/VistaICO_Toolbar_Icons/orig/Arrow-Up.png'
    alt='sort'
    className={styles.arrow}
    name={name}
    onClick={sort}
    style={
      sortType === 'z-a' ? { transform: 'translateY(-50%)' }
        : { transform: 'translateY(-50%) rotate(180deg)' }
    }
  />

export default Arrow;