import React from 'react';
import './loginFormStyles.scss';
import Login from './Login/login';
import Signin from './Signin/signin';

function LoginForm() {
  return (
    <div className="container">
      <Signin />
      <span className="vertical" />
      <Login />
    </div>
  );
}
export default React.memo(LoginForm);
