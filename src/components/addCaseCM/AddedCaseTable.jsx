"use client"; // Add this directive at the top of the file

import React from 'react';
import { Space, Table, Tag } from 'antd';

const columns = [
    {
        title: 'S.I No.',
        dataIndex: 'key',
        key: 'key',
      },
  {
    title: 'Case Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Partner',
    dataIndex: 'Partner',
    key: 'Partner',
    render: (text) => <a>{text}</a>,
  },
  {
    title:'Allocated Date',
    dataIndex:'AD',
    key:'AD'
  },
  {
    title:'Decision Date',
    dataIndex:'DD',
    key:'DD'
  },
  {
    title:'Status',
    dataIndex:'Status',
    key:'Status'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title:'Rejection Reason',
    dataIndex:'RR',
    key:'RR'
  },
  {
    title:'Credit Manager',
    dataIndex:'CM',
    key:'CM'
  },
  
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a className='underline text-blue-700'>Edit</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    Partner:'Ashv',
    AD:'13/05/2024',
    DD:'-',
    Status:'WIP',
    RR:'-',
    CM:'Rakhi Sharma',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    Partner:'LK',
    AD:'13/05/2024',
    DD:'-',
    Status:'Recommended',
    RR:'Reject-dedupe match found in SBL',
    CM:'Vineeth P',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    Partner:'LK',
    AD:'13/05/2024',
    DD:'-',
    Status:'Approved',
    RR:'Not Ok, with settled PL, cibil concerns, multiple cibil f...',
    CM:'Rohan Varma',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App = () => <Table columns={columns} dataSource={data} pagination={false} />;

export default App;
