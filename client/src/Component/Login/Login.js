import React, { useState } from 'react'
import FormGroup from '../Form/FormGroup'
import { RegisterUser } from '../../Services/AuthServices';
import LoginForm from './_Login'
import RegisterForm from './_Register';

const Login = ({ handelAuthentication, Error, Success }) => {
  //we use useState(Hook) to grab the valuet of the content on change, used this for making it a controled data, so withou this if we go back and try to change the state it won't change
  const [RegError, setRegError] = useState(false);
  const [RegSuccess, setRegSuccess] = useState(false);
  const [LoginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  const [RegisterData, setRegisterData] = useState({
    username: "",
    password: "",
    fullname: ""
  });
  const handelLoginData = e => {
    setLoginData({
      ...LoginData,
      [e.target.name]: e.target.value
    });
  };
  const handelRegisterData = e => {
    setRegisterData({
      ...RegisterData,
      [e.target.name]: e.target.value
    });
  };

  const handelLogin = e => {
    e.preventDefault();
    handelAuthentication({ ...LoginData }); //on submit this is passing the the Form data to handelAuthentication func
  }

  const handelRegister = e => {
    e.preventDefault();
    RegisterUser(RegisterData).then(res => {
      if (res.status === 201) {
        setRegSuccess(res.data);
        setRegError(false);
      }
    }).catch(err => {
      setRegSuccess(false);
      setRegError(err.response.data);
    })
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <LoginForm {...{
            Error,
            Success,
            handelLogin,
            handelLoginData,
            LoginData,
            FormGroup
          }} />
        </div>
        <div className="col-12 col-md-6 col-6">
          <RegisterForm {...{
            RegError,
            RegSuccess,
            handelRegister,
            RegisterData,
            handelRegisterData,
            FormGroup
          }} />
        </div>
      </div>
    </div>
  );
}

export default Login;
