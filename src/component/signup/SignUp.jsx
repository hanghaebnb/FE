import React from 'react';
import AccountForm from '../accountForm/AccountForm';

function SignUp({ open, handleClose }) {
  return <AccountForm isLogin={false} open={open} handleClose={() => handleClose()} />;
}

export default SignUp;
