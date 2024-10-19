import React, { useContext } from "react";
import { Usercontext, Provider } from "../utils/Usercontext";
import { useState } from "react";
import Body from "./Body";

const App = function () {
  const values = useContext(Usercontext);

  const [userInfo, setUserInfo] = useState(values);

  return (
    <Usercontext.Provider value={{ userInfo, setUserInfo }}>
      <div>
        <Body />
      </div>
    </Usercontext.Provider>
  );
};

export default App;
