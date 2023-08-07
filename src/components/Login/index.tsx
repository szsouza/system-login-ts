import { Button, Col, Form, Input, Row, message } from "antd";
import { useAuth } from "../../Context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  async function handleSubmit(values: { email: string; password: string }) {
    try {
      await auth.authenticate(values.email, values.password);
      navigate("/teste");
    } catch (error) {
      message.error("Invalid email or password");
    }
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <Col span={12}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleSubmit}
        >
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
