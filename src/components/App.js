import React from "react";
import { useState } from "react";
import Main from "./Main";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { TOKEN_KEY } from "../constant";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(TOKEN_KEY) ? true : false
    // true
  );

  const loggedIn = (token) => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setIsLoggedIn(false);
  };

  return (
    <div>
      <ResponsiveAppBar isLoggedIn={isLoggedIn} handleLogout={logout} />

      <Main isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn} />
    </div>
  );
}
export default App;
