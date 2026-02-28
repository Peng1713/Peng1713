import React from 'react';
import { Card, Switch, Typography, Divider, Space, Radio } from 'antd';
import { BulbOutlined, LayoutOutlined } from '@ant-design/icons';
import { useAppContext } from '../store/AppContext';
import type { NavPosition } from '../store/useSettingsStore';

const { Title, Text } = Typography;

const Settings: React.FC = () => {
  const { themeMode, navPosition, toggleTheme, setNavPosition } = useAppContext();

  return (
    <div>
      <Title level={3}>系统设置</Title>
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Space>
              <BulbOutlined style={{ fontSize: 18 }} />
              <Text strong>主题模式</Text>
            </Space>
            <Divider style={{ margin: '12px 0' }} />
            <Space>
              <Text>暗黑模式</Text>
              <Switch
                checked={themeMode === 'dark'}
                onChange={toggleTheme}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
              />
            </Space>
          </div>
          <div>
            <Space>
              <LayoutOutlined style={{ fontSize: 18 }} />
              <Text strong>导航布局</Text>
            </Space>
            <Divider style={{ margin: '12px 0' }} />
            <Radio.Group
              value={navPosition}
              onChange={(e) => setNavPosition(e.target.value as NavPosition)}
              optionType="button"
              buttonStyle="solid"
            >
              <Radio.Button value="side">侧边导航</Radio.Button>
              <Radio.Button value="top">顶部导航</Radio.Button>
            </Radio.Group>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default Settings;
