import React from 'react';
import AccountForm from '../accountForm/AccountForm';

function SignUp({ open }) {
  return <AccountForm isLogin={false} open={open} />;
}

export default SignUp;
