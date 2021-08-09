import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { Loading } from "../components/loading";
import { CheckToken } from "./RequestAction"





function ProtectedRoute({ component: Component, ...restOfProps }) {
  const [token, setToken] = useState(null)
  useEffect(() => {
    setToken(null);
    CheckToken()
      .then(res => { setToken(res); console.log("in then", res); })
  }, [])
  console.log(token);
  if (token === null) {
    console.log("hello");
    return <Loading Loading={Loading} /> // something that indicates you are waiting
  }
  else {
    console.log(token);
    return (
      <Route
        {...restOfProps}
        render={(props) =>
          token ? <Component {...props} /> : <Redirect to="/login/" />
        }

      />
    );
  }
}


export default ProtectedRoute;