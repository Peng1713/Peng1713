import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, FileOutlined, ShoppingCartOutlined } from '@ant-design/icons';

export default function Dashboard() {
  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>工作台</h2>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="用户总数"
              value={1128}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="文件数量"
              value={93}
              prefix={<FileOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="订单数量"
              value={256}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
      </Row>
      <Card title="欢迎使用" style={{ marginTop: 24 }}>
        <p>这是一个基于 React + TypeScript + Ant Design 搭建的示例项目。</p>
        <p>功能包括：</p>
        <ul>
          <li>登录界面</li>
          <li>顶部/左侧菜单切换</li>
          <li>黑夜/白天模式切换</li>
        </ul>
      </Card>
    </div>
  );
}
