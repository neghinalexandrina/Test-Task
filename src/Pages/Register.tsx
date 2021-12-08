import { Card, Col, Input, Layout, Row, Form, Button, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Link, useNavigate } from "react-router-dom";
import { REGISTER_USER } from '../store/actions/users';


const RegisterPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleRegister = (formData: any) => {
        dispatch({ type: REGISTER_USER, payload: formData })
        navigate('/');
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout.Content style={{ padding: '50px' }}>
                <Row justify="center" align="middle" style={{ height: '100%' }}>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                        <Card title="Register">
                            <Form onFinish={handleRegister} layout="vertical">
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}>
                                    <Input type="email" />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    name="confirm"
                                    label="Repeat Password"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item label="First Name" name="firstName" required>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Last Name" name="lastName" required>
                                    <Input />
                                </Form.Item>
                                <Row justify="center">
                                    <Space size="middle">
                                        <Button type="primary" htmlType="submit">Register</Button>
                                        <Link to="/">Back to Login</Link>
                                    </Space>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Layout.Content>
        </Layout>
    )
}

export default RegisterPage