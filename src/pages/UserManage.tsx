import React from 'react';
import { Table, Tag, Typography } from 'antd';

const { Title } = Typography;

const dataSource = [
  { key: '1', name: '张三', age: 28, role: '管理员', status: 'active' },
  { key: '2', name: '李四', age: 32, role: '编辑', status: 'active' },
  { key: '3', name: '王五', age: 25, role: '用户', status: 'inactive' },
  { key: '4', name: '赵六', age: 30, role: '编辑', status: 'active' },
];

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '角色', dataIndex: 'role', key: 'role' },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'active' ? 'green' : 'red'}>
        {status === 'active' ? '活跃' : '停用'}
      </Tag>
    ),
  },
];

const UserManage: React.FC = () => (
  <div>
    <Title level={3}>用户管理</Title>
    <Table dataSource={dataSource} columns={columns} />
  </div>
);

export default UserManage;
