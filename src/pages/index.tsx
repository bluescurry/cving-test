import React from 'react';
import styles from './index.less';
import Demo from './Demo';
import DemoThree from './DemoThree';
import DemoTwo from './DemoTwo';
export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Demo />
      <DemoTwo />
      <DemoThree />
    </div>
  );
};
