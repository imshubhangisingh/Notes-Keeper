import React from 'react'

const RegisterForm = ({
  RegError,
  RegSuccess,
  handelRegister,
  RegisterData,
  handelRegisterData,
  FormGroup }) => {
  return (
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

  )
}

export default RegisterForm;
