import React from 'react';
import { Space, Spin } from 'antd';
const Loading = () => (
 <div className='min-h-screen flex justify-center items-center'>
     <Space>
    <Spin size="large" />
  </Space>
 </div>
);
export default Loading;