import React, { useContext, useState } from "react";
import { Usercontext } from "../utils/Usercontext";
import Items from "./Items";

const Body = function () {
  const { userInfo, setUserInfo } = useContext(Usercontext);
  const [inputValue, setInputValue] = useState("");
  const { User, isAuthenticated, listItem } = userInfo;

  //Add button
  const handleAdd = function () {
    if (inputValue !== "") {
      const updateInfo = {
        User: User,
        isAuthenticated: isAuthenticated,
        listItem: [...listItem, inputValue],
      };
      setUserInfo(updateInfo);

      setInputValue("");
    }
  };
  //Remove

  const handleRemove = function (index) {
    const updateListItem = listItem.filter((_, idx) => index != idx);
    const updateInfo = { User, isAuthenticated, listItem: updateListItem };
    setUserInfo(updateInfo);
  };

  const clickHandle = function (state) {
    if (state === "login") {
      const updateInfo = { User: "rohan", isAuthenticated: "Yes" };
      setUserInfo(updateInfo);
    } else {
      const updateInfo = { User: "", isAuthenticated: "No" };
      setUserInfo(updateInfo);
    }
  };
  const handleclear = function () {
    const updateInfo = {
      User,
      isAuthenticated,
      listItem: [],
    };
    setUserInfo(updateInfo);
  };

  return (
    <div>
      <div>
        <h3 id="current-user">{`Current user:${userInfo.User}, isAuthenticated: ${userInfo.isAuthenticated}`}</h3>
        <button id="login-btn" onClick={() => clickHandle("login")}>
          Login
        </button>
        <button id="signout" onClick={() => clickHandle("signout")}>
          SignIn
        </button>
        <div>
          <input
            id="shopping-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
        <button onClick={handleAdd}>Add</button>
        <button id="clear-list" onClick={handleclear}>
          clear List
        </button>
      </div>
      <div>
        <ul>
          {console.log(listItem)}
          {listItem.map((curr, idx) => (
            <li id={`item-${curr}`} key={idx}>
              <Items item={curr} idx={idx} onRemove={() => handleRemove(idx)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Body;
