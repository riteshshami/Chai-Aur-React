import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {

  return (
    <UserContextProvider>
      <h1 className="bg-green-500 text-center text-3xl font-semibold py-4">React with Chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
