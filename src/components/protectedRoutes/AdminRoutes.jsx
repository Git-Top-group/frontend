import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import cookie from "react-cookies";
export function PostsRoutes({ children, ...rest }) {
  const [user] = useState({
    token: cookie.load("token") || "",
  });
  return (
    <>
      <Route>
        {user.token ? (
          <Posts {...rest} />
        ) : (
          <Switch>
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        )}
      </Route>
    </>
  );
}
