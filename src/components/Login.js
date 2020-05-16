import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

import { actionCreators } from "../store/action/actionCreators.js";

function Login(props) {
  const onFinish = (values) => {
    props.changeGuestToMember(values.username, values.password);
  };

  return (
    <div>
      <Row justify="center">
        <h1>Login</h1>
      </Row>
      <Row justify="center">
        <Col span={6}>
          {" "}
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    statusUser: state.user.statusUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeGuestToMember: (username, password) =>
      dispatch(actionCreators.login(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
