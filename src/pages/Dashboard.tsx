import React from 'react';
import { Card, Col, Row, Statistic, Typography } from 'antd';
import {
  TeamOutlined,
  ShoppingCartOutlined,
  RiseOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const Dashboard: React.FC = () => (
  <div>
    <Title level={3}>仪表盘</Title>
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} lg={6}>
        <Card hoverable>
          <Statistic
            title="用户总数"
            value={2846}
            prefix={<TeamOutlined />}
            valueStyle={{ color: '#1677ff' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card hoverable>
          <Statistic
            title="订单数量"
            value={1283}
            prefix={<ShoppingCartOutlined />}
            valueStyle={{ color: '#52c41a' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card hoverable>
          <Statistic
            title="增长率"
            value={12.5}
            prefix={<RiseOutlined />}
            suffix="%"
            valueStyle={{ color: '#faad14' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card hoverable>
          <Statistic
            title="文章数量"
            value={468}
            prefix={<FileTextOutlined />}
            valueStyle={{ color: '#722ed1' }}
          />
        </Card>
      </Col>
    </Row>
  </div>
);

export default Dashboard;
