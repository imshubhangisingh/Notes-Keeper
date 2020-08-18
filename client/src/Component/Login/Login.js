import React, { useState } from 'react'
import FormGroup from '../Form/FormGroup'
import { RegisterUser } from '../../Services/AuthServices';

const Login = ({ handelAuthentication, Error }) => {
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
        <div className="col-12 col-md-6 col-6">
          <div className="card">
            <h5 className="card-header">Sign-In</h5>
            <div className="card-body">
              <form onSubmit={handelLogin}>
                {Error && (
                  <div className="alert alert-danger text-center">Username or password is wrong!</div>
                )}
                {[
                  {
                    Id: "username",
                    Label: "Username",
                    Type: "text",
                    onChange: handelLoginData,
                    value: LoginData.username
                  },
                  {
                    Id: "password",
                    Label: "Password",
                    Type: "password",
                    onChange: handelLoginData,
                    value: LoginData.password
                  }
                ].map((fg, key) => (
                  <FormGroup {...fg} key={key} />
                ))}
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-6">
          <div className="card">
            <h5 className="card-header">Register</h5>
            <div className="card-body">
              <form onSubmit={handelRegister}>
                {RegError && (
                  <div className="alert alert-danger text-center">{RegError}</div>
                )}
                {RegSuccess && (
                  <div className="alert alert-success text-center">{RegSuccess}</div>
                )}
                {[
                  {
                    Id: "username",
                    Label: "Username",
                    Type: "text",
                    onChange: handelRegisterData,
                    value: RegisterData.username
                  },
                  {
                    Id: "password",
                    Label: "Password",
                    Type: "password",
                    onChange: handelRegisterData,
                    value: RegisterData.password
                  },
                  {
                    Id: "fullname",
                    Label: "Full Name",
                    Type: "text",
                    onChange: handelRegisterData,
                    value: RegisterData.fullname
                  }
                ].map((fg, key) => (
                  <FormGroup {...fg} key={key} />
                ))}
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
