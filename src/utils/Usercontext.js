import React from "react";
import { createContext } from "react";

export const Usercontext = createContext({
  User: "",
  isAuthenticated: "No",
  listItem: [],
});
