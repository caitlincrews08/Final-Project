import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../store';
import { registerUser, setErrors } from '../../store/actions/authActions';
import classnames from 'classnames';
import { Col, Container, Row } from 'react-bootstrap'

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
  }, [ state, props ]);

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
    <Container>
      <Row>
        <Col>
          <Link to="/" className="btn-flat waves-effect">
            Back 
          </Link>
          <Col style={{ paddingLeft: '11.250px' }}>
            <h4>
              <b>Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Col>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input ref={nameRef} error={errors.name} name="name" type="text"
                     className={classnames('', { invalid: errors.name })} />
              <label htmlFor="name">Name</label>
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input ref={emailRef} error={errors.email} name="email" type="email"
                     className={classnames('', { invalid: errors.email })} />
              <label htmlFor="email">Email</label>
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
              <input ref={passwordRef} error={errors.password} name="password" type="password"
                     className={classnames('', { invalid: errors.password })} />
              <label htmlFor="password">Password</label>
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="input-field col s12">
              <input ref={password2Ref} error={errors.password2} name="password2" type="password"
                     className={classnames('', { invalid: errors.password2 })} />
              <label htmlFor="password2">Confirm Password</label>
              <span className="red-text">{errors.password2}</span>
            </div>
            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
              <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }} type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
