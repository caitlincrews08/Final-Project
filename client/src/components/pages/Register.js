import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import { registerUser, setErrors } from '../../store/actions/authActions';
import classnames from 'classnames';
import { Button, Col, Container, Row } from 'react-bootstrap'


const Register = props => {
  const { state, dispatch } = useContext(Store);
  const errors = state.error;
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  useEffect(() => {
    if (state.auth.isAuthenticated)
      props.history.push('/dashboard');
  }, [state, props]);

  const onSubmit = e => {
    e.preventDefault();

    dispatch(setErrors({ response: { data: {} } }));

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password2: password2Ref.current.value,
    };

    registerUser(userData, props.history)(dispatch);
  };

  return (

    <Col>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className='justify-content-center'>
        <Link to="/" className="btn-flat">Back</Link>
      </Row>
      <br />
      <Row className='justify-content-center'>
        <h4>
          <b>Register</b> below
            </h4>
      </Row>
      <Row className='justify-content-center'>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Row>
      <br />
      <form noValidate onSubmit={onSubmit}>
        <Row>
          <Col className="input-field">
            <input ref={nameRef} error={errors.name} name="name" type="text"
              className={classnames('', { invalid: errors.name })} />
            <label htmlFor="name">Name</label>
            <span className="red-text">{errors.name}</span>
          </Col>
        </Row>
        <Row>
          <Col className="input-field">
            <input ref={emailRef} error={errors.email} name="email" type="email"
              className={classnames('', { invalid: errors.email })} />
            <label htmlFor="email">Email</label>
            <span className="red-text">{errors.email}</span>
          </Col>
        </Row>
        <Row>
          <Col className="input-field">
            <input ref={passwordRef} error={errors.password} name="password" type="password"
              className={classnames('', { invalid: errors.password })} />
            <label htmlFor="password">Password</label>
            <span className="red-text">{errors.password}</span>
          </Col>
        </Row>
        <Row>
          <Col className="input-field ">
            <input ref={password2Ref} error={errors.password2} name="password2" type="password"
              className={classnames('', { invalid: errors.password2 })} />
            <label htmlFor="password2">Confirm Password</label>
            <span className="red-text">{errors.password2}</span>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button type="submit">
              Sign Up
            </Button>
          </Col>
        </Row>
      </form>
      <br />
      <br />
      <br />
    </Col>

  );
};

export default Register;
