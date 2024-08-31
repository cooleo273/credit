import React from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


interface SignUpFormValues {
  username: string;
  password: string;
  email: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: SignUpFormValues) => {
    try {
      // Simulate API request for signup
      console.log("Sign up form values:", values);
      message.success("Sign-up successful!");
      navigate("/");
    } catch (error) {
      message.error("Sign-up failed, please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <Typography.Title level={2} style={styles.title}>
          Sign Up
        </Typography.Title>
        <Form name="signup" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined style={styles.icon}/>} placeholder="Username" size="large" style={styles.input} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<MailOutlined  style={styles.icon}/>} placeholder="Email" size="large" style={styles.input}/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined style={styles.icon} />}
              placeholder="Password"
              size="large"
              style={styles.input}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" style={styles.button}>
              Sign Up
            </Button>
          </Form.Item>
          <Form.Item>
            <Typography.Text style={styles.loginLink}>
              Already have an account? <a href="/">Log in</a>
            </Typography.Text>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f2f5",
      padding: "0 10rem",
      overflow: "hidden", // Prevents scrolling
    }as React.CSSProperties,
    formContainer: {
      flex: 3,
      maxWidth: 400,
      padding: "40px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      overflow: "hidden", // Ensures the form stays within the container
    }as React.CSSProperties,
    title: {
      textAlign: "center",
      marginBottom: "30px",
    }as React.CSSProperties,
    form: {
      width: "100%",
    }as React.CSSProperties,
    input: {
      borderRadius: "6px",
      padding: "10px",
      border: "none",
      borderBottom: "1px solid",
      color: "rgba(0, 0, 0, 0.88)",
  
    }as React.CSSProperties,
    icon: {
      color: "#1890ff",
    }as React.CSSProperties,
    button: {
      borderRadius: "6px",
      fontWeight: "bold",
    }as React.CSSProperties,
    loginLink: {
        display: "block",
        textAlign: "center",
      } as React.CSSProperties, 
  };

export default SignUp;
