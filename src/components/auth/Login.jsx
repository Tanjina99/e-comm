import { Button, Form, Input } from "antd";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import axiosInstance from "@/lib/axios";
import Cookies from "js-cookie";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = (data) => {
    if(Object.values(data).length > 1) {
        axiosInstance.post("/user/signin", data)
        .then(res => {
            if(res.status === 200){
                const token = res?.data?.token;
                Cookies.set(process.env.NEXT_PUBLIC_ECOMM_USER, token)
            }
        })
        .catch(error => console.log(error))
    }
  };
  return (
    <div className="user_login_container">
      <h1>loging comp</h1>
      <div className="mb-3">
        <Form
          //   {...layout}
          //   form={form}
          name="control-hooks"
          className="login-form"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Email is required",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              prefix={<MdEmail />}
              allowClear
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password is required",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              prefix={<CiLock />}
            />
          </Form.Item>
          <Form.Item>
            <div className="d-flex justify-content-center">
              <Button type="primary" htmlType="submit" className="primary_btn">
                Login
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
