import * as React from "react";
import { AppContextConsumer } from "./AppContext";

export const PostInfo = () => (
  <AppContextConsumer>
    {(appContext) =>
      appContext && (
        <div>
          Name: {appContext.name} <br />
          Author: {appContext.author} <br />
          Url: {appContext.url}
          Name: {appContext.test} <br />{" "}
          {/* ///////// DOES NOT EXIST ON OUR INTERFACE */}
        </div>
      )
    }
  </AppContextConsumer>
);
