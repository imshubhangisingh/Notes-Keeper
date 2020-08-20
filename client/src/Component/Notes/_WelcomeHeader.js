import React from 'react'

const WelcomeHeader = ({ LoggedIn, Logout }) => {
  return (
    <h5 className="card-header">
      <span className="align-middle d-inline-block mt-1">
        Welcome, {LoggedIn.fullname}!
        </span>

      <div className="btn-group float-right">
        <button className="btn btn-danger btn-sm " onClick={Logout}>Logout
      </button>
      </div>
    </h5>
  )
}

export default WelcomeHeader;
