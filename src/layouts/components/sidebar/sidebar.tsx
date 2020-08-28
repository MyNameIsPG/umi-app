import React from 'react';
import Logo from './logo';
import Menubar from './menubar';
import styles from './sidebar.less';

export default () => {
  return (
    <div className={styles.sidebarContainer}>
      <Logo />
      <Menubar />
    </div>
  );
}