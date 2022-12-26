import React from 'react';
import AccountForm from '../accountForm/AccountForm';

function Login({ open }) {
  return <AccountForm isLogin open={open} />;
}

export default Login;
