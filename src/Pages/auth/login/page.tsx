import { FC } from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import img from "../../../assets/login.png";

interface LoginFormValues {
  username: string;
  password: string;
}

const Login: FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: LoginFormValues) => {
    try {
      const response = await axios.post("/api/login", values);
      message.success("Login successful!");

      localStorage.setItem("token", response.data.token);

      navigate("/dashboard");
    } catch (error) {
      message.error("Login failed, please check your credentials.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img style={styles.image} src={img} alt="Login" />
      </div>
      <div style={styles.formContainer}>
        <Typography.Title level={2} >
          Login
        </Typography.Title>
        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          layout="vertical"
          style={styles.form}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined style={styles.icon} />}
              placeholder="Username"
              size="large"
              style={styles.input}
            />
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
              Log in
            </Button>
          </Form.Item>
          <Typography.Text >
            Don't have an account? <Link to="/signup" style={styles.signUpLink}>Sign up</Link>
          </Typography.Text>
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
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // Ensures the image stays within the container
  },
  image: {
    maxWidth: "55%",
    maxHeight: "100%", // Ensures the image scales to fit within the available space
    objectFit: "contain" as React.CSSProperties['objectFit'],  // Keeps the aspect ratio of the image
  },
  formContainer: {
    flex: 3,
    maxWidth: 400,
    padding: "40px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden", // Ensures the form stays within the container
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
  form: {
    width: "100%",
  },
  input: {
    borderRadius: "6px",
    padding: "10px",
    border: "none",
    borderBottom: "1px solid",
    color: "rgba(0, 0, 0, 0.88)",
},
  icon: {
    color: "#1890ff",
  },
  button: {
    borderRadius: "6px",
    fontWeight: "bold",
  },
  signUpText: {
    textAlign: "center",
    display: "block",
    marginTop: "20px",
  },
  signUpLink: {
    color: "#1890ff",
  },
};

export default Login;
