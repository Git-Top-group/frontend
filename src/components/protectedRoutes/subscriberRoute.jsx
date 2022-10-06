import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import cookie from "react-cookies";
import Subscribe from '../subscribe/Subscribe';
export function SubRoutes({ children, ...rest }) {
  const [user] = useState({
    token: cookie.load("token") || "",
  });

  const code =cookie.load('code')
  
  
  return (
    <>
      <Route>
        {code ? (
          <Subscribe {...rest} />
        ) : (
         <></>
        )}
      </Route>
    </>
  );
}