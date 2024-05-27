import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const DropdownElement = ({items,title}) => {
  return (
    <div className='bg-gray-100 p-4 rounded-md'> <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
    <Space className="text-gray-500">
      {title}
      <DownOutlined />
    </Space>
    </a>
  </Dropdown></div>
  )
}

export default DropdownElement