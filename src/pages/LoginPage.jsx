import { Button, Form, Input, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Login Success:', values);
    message.success('Успешный вход');
    navigate('/dashboard');
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <Title level={2}>Вход</Title>
      <Form onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Введите имя пользователя!' }]}
        >
          <Input placeholder="Имя пользователя" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Введите пароль!' }]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Войти
          </Button>
        </Form.Item>
      </Form>
      <Button type="link" onClick={() => message.info('Сброс пароля!')}>
        Забыли пароль?
      </Button>
    </div>
  );
};

export default LoginPage;
