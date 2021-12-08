import { Card, Col, Input, Layout, Row, Form, Button, Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from '../store/actions/users';



const LoginPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { users } = useSelector((state: any) => state.users)

    const login = (form: any) => {

        const loggedUser = users.find((user: any) => user.email === form.email && user.password === form.password)

        if (loggedUser) {
            dispatch({type: LOGIN, payload: form})
        }
        
    }

    return (
        <Layout style={{ height: '100vh' }}>
            <Layout.Content>
                <Row justify="center" align="middle" style={{ height: '100%' }}>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                        <Card title="Login">
                            <Form onFinish={login} layout="vertical">
                                <Form.Item name="email" label="User name">
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Password" name="password">
                                    <Input.Password />
                                </Form.Item>
                                <Row justify="center">
                                    <Space size='middle' >
                                        <Form.Item style={{ margin: 0 }}>
                                            <Button type="primary" htmlType="submit">Login</Button>
                                        </Form.Item>
                                        <Link to="/register">Register</Link>
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

export default LoginPage