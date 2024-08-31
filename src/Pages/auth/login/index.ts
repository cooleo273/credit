
import { Button, Form, Input, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { FC } from 'react'; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: LoginFormValues) => {
    try {
      // Replace with your actual login API endpoint
      const response = await axios.post("/api/login", values);
      message.success("Login successful!");
      
      // Assume the API returns a token
      localStorage.setItem("token", response.data.token);

      // Navigate to the dashboard after successful login
      navigate("/dashboard");
    } catch (error) {
      message.error("Login failed, please check your credentials.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <Typography.Title level={2} style={{ textAlign: "center" }}>
        Login
      </Typography.Title>
      <Form
        name="login"
        onFinish={onFinish}
        initialValues={{ remember: true }}
        layout="vertical"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


