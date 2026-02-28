import { useMemo, useState } from 'react'
import {
  App as AntApp,
  Button,
  Card,
  ConfigProvider,
  Form,
  Input,
  Layout,
  Menu,
  Segmented,
  Space,
  Switch,
  Typography,
  theme,
} from 'antd'
import type { MenuProps } from 'antd'
import {
  AppstoreOutlined,
  HomeOutlined,
  LockOutlined,
  LoginOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import './App.css'

const { Header, Sider, Content } = Layout
const { Title, Text, Paragraph } = Typography

type NavPosition = 'top' | 'left'

const menuItems: MenuProps['items'] = [
  { key: 'home', icon: <HomeOutlined />, label: '首页' },
  { key: 'products', icon: <AppstoreOutlined />, label: '产品管理' },
  { key: 'settings', icon: <SettingOutlined />, label: '系统设置' },
]

const pageContent: Record<string, { title: string; description: string }> = {
  home: {
    title: '欢迎页',
    description: '欢迎使用管理后台，你可以在这里查看概览信息。',
  },
  products: {
    title: '产品管理',
    description: '这里可以管理产品列表、上架状态与分类信息。',
  },
  settings: {
    title: '系统设置',
    description: '这里可以调整系统参数、权限策略和通知配置。',
  },
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [isDark, setIsDark] = useState(false)
  const [navPosition, setNavPosition] = useState<NavPosition>('left')
  const [selectedMenu, setSelectedMenu] = useState('home')

  const currentContent = useMemo(
    () => pageContent[selectedMenu] ?? pageContent.home,
    [selectedMenu],
  )

  const handleLogin = (values: { username: string; password: string }) => {
    setUsername(values.username)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setSelectedMenu('home')
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <AntApp>
        {isLoggedIn ? (
          <Layout className="app-layout">
            {navPosition === 'left' && (
              <Sider
                width={220}
                theme={isDark ? 'dark' : 'light'}
                className="app-sider"
              >
                <div className="brand">管理后台</div>
                <Menu
                  mode="inline"
                  selectedKeys={[selectedMenu]}
                  items={menuItems}
                  onClick={(e) => setSelectedMenu(e.key)}
                />
              </Sider>
            )}

            <Layout>
              <Header className="app-header">
                <div className="header-left">
                  <Title level={4} className="header-title">
                    React + TS + Ant Design
                  </Title>
                </div>
                {navPosition === 'top' && (
                  <Menu
                    mode="horizontal"
                    selectedKeys={[selectedMenu]}
                    items={menuItems}
                    onClick={(e) => setSelectedMenu(e.key)}
                    className="top-menu"
                  />
                )}
                <Space size="middle" className="header-right">
                  <Text>Hi, {username}</Text>
                  <Button
                    icon={<LogoutOutlined />}
                    onClick={handleLogout}
                    type="default"
                  >
                    退出登录
                  </Button>
                </Space>
              </Header>

              <Content className="app-content">
                <Space direction="vertical" size={16} className="full-width">
                  <Card title="显示设置">
                    <Space size="large" wrap>
                      <Space>
                        <Text>导航位置</Text>
                        <Segmented<NavPosition>
                          options={[
                            { label: '左侧', value: 'left' },
                            { label: '顶部', value: 'top' },
                          ]}
                          value={navPosition}
                          onChange={(value) => setNavPosition(value)}
                        />
                      </Space>

                      <Space>
                        <Text>主题模式</Text>
                        <Switch
                          checked={isDark}
                          onChange={setIsDark}
                          checkedChildren="黑夜"
                          unCheckedChildren="白天"
                        />
                      </Space>
                    </Space>
                  </Card>

                  <Card>
                    <Title level={3}>{currentContent.title}</Title>
                    <Paragraph>{currentContent.description}</Paragraph>
                  </Card>
                </Space>
              </Content>
            </Layout>
          </Layout>
        ) : (
          <Layout className="login-layout">
            <Content className="login-content">
              <Card className="login-card">
                <Space direction="vertical" size={8} className="full-width">
                  <Title level={3}>欢迎登录</Title>
                  <Text type="secondary">请输入账号密码进入系统</Text>
                </Space>

                <Form
                  layout="vertical"
                  onFinish={handleLogin}
                  initialValues={{ username: '', password: '' }}
                  className="login-form"
                >
                  <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="请输入用户名"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="请输入密码"
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item className="login-submit">
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<LoginOutlined />}
                      size="large"
                      block
                    >
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Content>
          </Layout>
        )}
      </AntApp>
    </ConfigProvider>
  )
}

export default App
