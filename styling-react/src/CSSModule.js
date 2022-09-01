import React from 'react';
import styles from './CSSModule.module.scss';

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, React 공부 중 <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;