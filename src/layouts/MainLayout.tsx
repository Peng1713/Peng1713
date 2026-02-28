import { useState } from 'react';
import { Layout, Menu, Button, Dropdown, Space } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  FileOutlined,
  SettingOutlined,
  MoonOutlined,
  SunOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const { Header, Sider, Content } = Layout;

type MenuMode = 'inline' | 'horizontal';

const menuItems: MenuProps['items'] = [
  { key: 'dashboard', icon: <DashboardOutlined />, label: '工作台' },
  { key: 'files', icon: <FileOutlined />, label: '文件管理' },
  { key: 'settings', icon: <SettingOutlined />, label: '系统设置' },
];

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuPosition, setMenuPosition] = useState<MenuMode>('inline');
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const userMenuItems: MenuProps['items'] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      onClick: () => {
        logout();
        navigate('/login');
      },
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {menuPosition === 'inline' && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={220}
        >
          <div
            style={{
              height: 48,
              margin: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: collapsed ? 'center' : 'flex-start',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            {collapsed ? 'App' : '我的应用'}
          </div>
          <Menu
            defaultSelectedKeys={['dashboard']}
            mode="inline"
            items={menuItems}
            style={{ borderRight: 0 }}
          />
        </Sider>
      )}

      <Layout>
        <Header
          style={{
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--ant-color-bg-container)',
            borderBottom: '1px solid var(--ant-color-border)',
          }}
        >
          <Space>
            {menuPosition === 'inline' && (
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
            )}
            {menuPosition === 'horizontal' && (
              <Menu
                mode="horizontal"
                defaultSelectedKeys={['dashboard']}
                items={menuItems}
                style={{ flex: 1, minWidth: 0, border: 'none' }}
              />
            )}
          </Space>

          <Space>
            <Button
              type="text"
              icon={theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '白天模式' : '黑夜模式'}
            </Button>

            <Button
              type="text"
              onClick={() =>
                setMenuPosition((p) => (p === 'inline' ? 'horizontal' : 'inline'))
              }
            >
              {menuPosition === 'inline' ? '切换为顶部菜单' : '切换为左侧菜单'}
            </Button>

            <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
              <Button type="text" icon={<UserOutlined />}>
                用户
              </Button>
            </Dropdown>
          </Space>
        </Header>

        <Content style={{ margin: 24, padding: 24, minHeight: 280 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
