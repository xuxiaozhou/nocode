import styles from './index.less';
import { Button } from 'antd';

export default function IndexPage() {
  return (
    <div>
      <Button>111</Button>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}