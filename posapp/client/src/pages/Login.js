import React, { useEffect } from 'react'
import { Button, Col, Form, Input, message, Row } from "antd";
import '../resourses/authentication.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      dispatch({ type: 'showLoading' });

      // Making the API request
      const res = await axios.post('/api/users/login', values);

      dispatch({ type: 'hideLoading' });
      message.success('Login successful');

      // Storing the user data in localStorage
      localStorage.setItem('pos-user', JSON.stringify(res.data));
      navigate('/home');
    } catch (error) {
      dispatch({ type: 'hideLoading' });
      message.error('Something went wrong');
    }
  };


  useEffect(() => {
    if (localStorage.getItem('pos-user'))
      navigate('/home')
  }, [navigate])

  return (
    <div className='authentication'>
      <Row>
        <Col lg={8} xs={22}>
          <Form
            layout="vertical"
            onFinish={onFinish}
          >
            <h1><b>POS APP</b></h1>
            <hr />
            <h3>Login</h3>

            <div className='formlabel'>
              <Form.Item name="userId" label="User ID">
                <Input />
              </Form.Item>
            </div>
            <Form.Item name="password" label="Password">
              <Input type='password' />
            </Form.Item>



            <div className="d-flex flex-column align-items-center">
              <Link className='link' to='/register'>Not Yet Registered ? Click Here To Register</Link>
              <Button className='loginbtn mt-3 primary' htmlType="submit" type="primary">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login