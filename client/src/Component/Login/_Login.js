import React from 'react'

const LoginForm = ({
  Error,
  Success,
  handelLogin,
  LoginData,
  handelLoginData,
  FormGroup }) => {
  return (
    <div className="card">
      <h5 className="card-header">Sign-In</h5>
      <div className="card-body">
        <form onSubmit={handelLogin}>
          {Error && (
            <div className="alert alert-danger text-center">Username or password is wrong!</div>
          )}
          {Success && (
            <div className="alert alert-success text-center">Username successfully logged out!</div>
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

  )
}

export default LoginForm;