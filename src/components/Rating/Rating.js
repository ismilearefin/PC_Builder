import { Rate } from 'antd';

export default function Rating({value}) {
    
  return (
    <Rate disabled defaultValue={value} />
  )
}
