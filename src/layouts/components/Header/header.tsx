import React from 'react';
import { MenuFoldOutlined } from '@ant-design/icons';
import styles from './header.less';

export default () => {
  return (
    <div className={styles.fixedHeader}>
      <div className={styles.headerNavFlex}>
        <MenuFoldOutlined />
      </div>
    </div>
  );
}