import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/Header/header';
import styles from './index.less';

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.appWrapper}>
        <Sidebar />
        <div className={styles.mainContainer}>
          <Header />
          <div className={styles.appMain}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout