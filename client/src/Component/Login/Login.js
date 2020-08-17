import React, { useState } from 'react'
import FormGroup from '../Form/FormGroup'

const Login = ({ handelAuthentication, Error }) => {
  //we use useState(Hook) to grab the valuet of the content on change, used this for making it a controled data, so withou this if we go back and try to change the state it won't change
  const [FormData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handelChange = e => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    });
  };
  const handelSubmit = e => {
    e.preventDefault(); // this resist the page from getting reloaded on clicking submit
    handelAuthentication({ ...FormData }); //on submit this is passing the the Form data to handelAuthentication func
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 col-6 offset-md-3">
          <div className="card">
            <h5 className="card-header">Sign-In</h5>
            <div className="card-body">
              <form onSubmit={handelSubmit}>
                {Error && (
                  <div className="alert alert-danger">Username or password is wrong!</div>
                )}
                {[
                  {
                    Id: "username",
                    Label: "Username",
                    Type: "text",
                    onChange: handelChange,
                    value: FormData.username
                  },
                  {
                    Id: "password",
                    Label: "Password",
                    Type: "password",
                    onChange: handelChange,
                    value: FormData.password
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
      </div>
    </div>
  )
}

export default Login;
