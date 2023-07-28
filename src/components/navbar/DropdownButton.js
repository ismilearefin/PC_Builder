import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
const items = [
  {
    label: (
              <Link href={'/CPU'}>CPU</Link>
    
    ),
    key: '0',
  },
  {
    label: (
      <Link href={'/Mother Board'}>Mother Board</Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link href={'/RAM'}>RAM</Link>
    ),
    key: '2',
  },
  {
    label: (
      <Link href={'/Power supply Unit'}>Power supply Unit</Link>
    ),
    key: '3',
  },
  {
    label: (
      <Link href={'/Storage Device'}>Storage Device</Link>
    ),
    key: '4',
  },
  {
    label: (
      <Link href={'/Monitor'}>Monitor</Link>
    ),
    key: '5',
  },
  
];
const DropdownButton = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a className='hover:text-[#5CE1E6]' onClick={(e) => e.preventDefault()}>
      <Space>
        Category
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownButton;