import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import { loginUser, setErrors } from '../../store/actions/authActions';
import classnames from 'classnames';
import { Button, Col, Row } from 'react-bootstrap';

const Login = props => {
  const { state, dispatch } = useContext(Store);
  const errors = state.error;
  const emailRef = useRef();
  const passwordRef = useRef();
  const year = new Date().getFullYear();

  useEffect(() => {
    if (state.auth.isAuthenticated)
      props.history.push('/home');
  }, [state, props]);

  const onSubmit = e => {
    e.preventDefault();

    dispatch(setErrors({ response: { data: {} } }));

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    loginUser(userData, props.history)(dispatch);
  };

  return (
    <Col className='vertical-center'>
      <br />
      <br />
      <br />
      <br />
      <Row className='hidden justify-content-center'>ALLYOURBASEAREBELONGTOUS</Row>
      <br />
      <br />
      <br />
      <br />
      <Row className='justify-content-center'>
        <Link to='/' className='btn-flat loggedout'>Back</Link>
      </Row>
      <br />
      <Col>
        <h4>
          <b>Login</b> below
        </h4>
        <p className='grey-text text-darken-1'>
          Don't have an account? <Link to='/register' className='loggedout'>Register</Link>
        </p>
      </Col>
      <br />
      <br />
      <form noValidate onSubmit={onSubmit}>
        <Col className='input-field'>
          <input ref={emailRef} error={errors.incorrect} name='email' type='email' className={classnames('', { invalid: errors.incorrect })} />
          <label htmlFor='email'>Email</label>
          <span className='red-text'>{errors.incorrect}</span>
        </Col>
        <Col className='input-field'>
          <input ref={passwordRef} error={errors.incorrect} name='password' type='password' className={classnames('', { invalid: errors.incorrect })} />
          <label htmlFor='password'>Password</label>
        </Col>
        <Col>
          <span className='red-text'>{errors.message}</span>
        </Col>
        <br />
        <Col>
          <Button variant='light' type='submit' className='ripple'>
            <b>Login</b>
          </Button>
        </Col>
      </form>
      <br />
      <div class="fb-share-button" data-href="https://memeheim.herokuapp.com/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmemeheim.herokuapp.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
      <Col>
        <p className=''>&copy; {year} Memeheim</p>
      </Col>
    </Col>
  );
};

export default Login;
