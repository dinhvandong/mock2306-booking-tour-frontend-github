
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
// import 'tailwindcss/tailwind.css';
const LoginForm = () => {
    const onFinish = (values) => {
      console.log('Received values:', values);
    };
  
    return (
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className=" border-2 border-red-500 rounded w-[300px] h-[350px] mt-5 mb-5 align-middle flex flex-col items-center justify-center"
      >
        <Form.Item
          name="username" className='w-[200px]'
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item className='w-[200px]'
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item className='bg-blue-600 w-[200px]'>
          <Button  type="primary" htmlType="submit" className="w-full">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default LoginForm;