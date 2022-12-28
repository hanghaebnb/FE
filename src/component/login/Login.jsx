import React from 'react';
import AccountForm from '../accountForm/AccountForm';

function Login({ open, handleClose }) {
  return <AccountForm isLogin open={open} handleClose={() => handleClose()} />;
}

export default Login;
