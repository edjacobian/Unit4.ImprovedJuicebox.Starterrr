import { useState } from "react";
import Posts from "./components/Posts.jsx";
import AuthForm from "./components/AuthForm.jsx";
function App() {
  const [token, setToken] = useState(false);

  return (
    <>
      <h1>Welcome to the EUD</h1>
      <p>Edwardo University Database</p>

      {token ? <button onClick={() => setToken(false)}>Sign Out</button> : ""}

      {token ? <Posts token={token} /> : <AuthForm setToken={setToken} />}
    </>
  );
}

export default App;
