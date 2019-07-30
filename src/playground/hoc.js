// higher order component (HOC) - a component(HOC) that renders another componnet
//Reuse code
//REnder highjacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>hi</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const RequireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login</p>}
    </div>
  );
}

const AuthInfo = RequireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={true} info={"hiihihihi"} />, document.getElementById("app"));