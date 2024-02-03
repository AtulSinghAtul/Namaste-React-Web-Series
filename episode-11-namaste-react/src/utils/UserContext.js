import { createContext } from "react";

const userContext = createContext({
  userLoggedIn: "Dummy User",
});

export default userContext;
