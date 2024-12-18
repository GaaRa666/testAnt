import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 50 }}>
      <Title level={2}>Добро пожаловать!</Title>
      <Button type="primary" onClick={() => navigate('/report')}>
        Перейти к отчету
      </Button>
    </div>
  );
};

export default DashboardPage;
