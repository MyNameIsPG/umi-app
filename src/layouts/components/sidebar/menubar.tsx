import React, { Component } from 'react';
import { Link } from 'umi';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import ScrollBar from '@/components/ScrollBar';
import styles from './sidebar.less';

const { SubMenu } = Menu;

class Menubar extends Component {
  handleClick = (e: any) => {
    console.log('click ', e);
  };
  render() {
    return (
      <div className={styles.sidebarMenuContainer}>
        <ScrollBar options={{ suppressScrollX: true }}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <MailOutlined />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="1"><Link to="/home/test"> Option 1</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/home/test2"> Option 2</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <SettingOutlined />
                  <span>Navigation Three</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </ScrollBar>
      </div>
    )
  }
}

export default Menubar;